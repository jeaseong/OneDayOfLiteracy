import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Comment from "pages/Comment/Comment";
import {
  PostContainer,
  PostHeader,
  PostTitle,
  PostWriter,
  PostBody,
  PostImageBox,
  PostImage,
  PostFooter,
  Tag,
  LikeButton,
} from "styles/Posts/PostStyle";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useQueryClient } from "react-query";
import {
  useGetPost,
  useGetPostLikeCount,
  usePostDislike,
  usePostLikeAdd,
  usePostLikeCount,
} from "../../queries/postQuery";
import Loading from "../../components/Loading";
import { useGetProfileUser } from "../../queries/userQuery";
import { del } from "../../utils/api";
import PostEditForm from "./PostEditForm";
import { img } from "../../utils/imgImport";

function Post() {
  const params = useParams();
  const { postId } = params;
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { data, isFetching } = useGetPost(postId);
  const [isEdit, setIsEdit] = useState(false);

  // 유저 정보
  const { userState, isLogin } = queryClient.getQueryData("userState");
  useGetProfileUser(userState._id);

  // 게시글의 좋아요 카운트 get, 카운트수정 훅
  const likeCount = useGetPostLikeCount(postId);
  const likeMutation = usePostLikeCount(postId);

  // 좋아요 추가, 취소 커스텀훅
  const postAddLike = usePostLikeAdd(postId, userState._id);
  const postDislike = usePostDislike(postId, userState._id);
  const isPostLike = userState.postLikes.includes(postId);

  if (isFetching || likeCount.isFetching) return <Loading />;

  const isPostOwner = data.userId._id === userState._id;

  const handleDeletePost = async () => {
    try {
      await del(`posts/${postId}`);
      queryClient.invalidateQueries("user");
      queryClient.invalidateQueries("posts");
      navigate("/posts");
    } catch (err) {
      console.log("삭제실패", err);
    }
  };

  const postLikeList = isPostLike ? (
    <LikeButton
      disabled={!isLogin}
      onClick={() => {
        postDislike.mutate();
        likeMutation.mutate("down");
      }}
    >
      <ThumbUpIcon />
    </LikeButton>
  ) : (
    <LikeButton
      disabled={!isLogin}
      onClick={() => {
        postAddLike.mutate();
        likeMutation.mutate("up");
      }}
    >
      <ThumbUpIcon color="disabled" />
    </LikeButton>
  );

  return (
    <>
      {isEdit ? (
        <PostEditForm />
      ) : (
        <>
          <PostContainer>
            <PostTitle>{data.title}</PostTitle>
            <PostHeader>
              <Link to={`/user/${data.userId._id}`}>
                <PostWriter>
                  <img src={img.level[data.userId.level]} alt="level" />
                  {!data.author ? "익명 문하생" : data.author}
                </PostWriter>
              </Link>
              <PostWriter>{data.createdAt?.slice(0, 10)}</PostWriter>
            </PostHeader>
            <PostBody>
              <PostImageBox>
                {data.imageUrls?.map((image, index) => {
                  return <PostImage key={index} src={image} />;
                })}
              </PostImageBox>
              <ReactMarkdown
                children={data.content}
                remarkPlugins={[remarkGfm]}
              ></ReactMarkdown>
            </PostBody>
            <PostFooter>
              {data.tags?.map((tag, index) => (
                <Link to={`/posts?tag=${tag}`} key={index}>
                  <Tag>#{tag}</Tag>
                </Link>
              ))}
            </PostFooter>
            {postLikeList}
            <p>좋아요 수 : {likeCount.data}</p>
            {isPostOwner && (
              <>
                <button onClick={() => setIsEdit((cur) => !cur)}>수정</button>
                <button onClick={handleDeletePost}>삭제</button>
              </>
            )}
          </PostContainer>
          <Comment postId={params.postId} />
        </>
      )}
    </>
  );
}

export default Post;
