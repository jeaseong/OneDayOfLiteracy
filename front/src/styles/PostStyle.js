import styled from "styled-components";

export const PostsContainer = styled.div`
  max-width: 1024px;
  display: flex;
  flex-flow: wrap;
  align-items: center;
  // justify-content: flex-start;
  gap: 1rem;
  margin: 5% auto;
  border-radius: 8px;
`;

export const Posts = styled.div`
  width: 25%;
  height: 30vh;
  border-radius: 8px;
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 15px;
  font-family: Maplestory Light;
  background-color: white;
  box-shadow: 0 0 5px #c48f5a;
`;

export const PostsImage = styled.img`
  width: 100%;
  height: 50%;
  background-color: #dcc2aa;
  border-radius: 15px;
`;
export const PostsSummary = styled.div`
  width: 100%;
  min-height: 80px;
`;
export const PostsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const PostsTitle = styled.h3`
  font-size: 16px;
  margin: 15px 0;
`;
export const PostsWriter = styled.h4`
  font-size: 12px;
  font-family: Maplestory Light;
  color: #666666;
`;
export const PostsContent = styled.p`
  display: block;
  font-size: 12px;
  color: #666666;
`;
export const Tag = styled.span`
  font-family: Maplestory Light;
  display: inline-block;
  font-size: 11px;
  margin: 10px 5px 0 0;
`;
export const PostsLike = styled.span``;
export const PostContainer = styled.div`
  max-width: 1024px;
  background-color: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 5% auto;
  padding: 5%;
  box-shadow: 0 0 5px #c48f5a;
`;
export const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 4%;
`;

export const PostTitle = styled.div`
  font-size: 40px;
  text-align: center;
`;

export const PostWriter = styled.div`
  font-size: 18px;
  font-family: Maplestory Light;
`;

export const PostBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 3px #c48f5a;
  border-radius: 5px;
  padding: 5%;
`;

export const PostImageBox = styled.div`
  margin-bottom: 5%;
  display: flex;
  justify-content: center;
`;

export const PostImage = styled.img`
  max-width: 30%;
  max-height: 20vh;
  margin: 0 20px;
`;

export const PostContent = styled.div`
  font-size: 18px;
  font-family: Maplestory Light;
  width: 80%;
  min-height: 15vh;
  text-align: left;
`;
export const PostFooter = styled.div``;
