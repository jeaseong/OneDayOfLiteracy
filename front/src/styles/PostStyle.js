import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 80%;
  min-height: 56vh;
  margin: 144px;
  border-radius: 8px;
`;
export const Post = styled.div`
  width: 228px;
  min-height: 200px;
  border-radius: 8px;
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 15px;
  font-family: Maplestory Light;
  background-color: white;
`;

export const PostImage = styled.img`
  width: 100%;
  max-height: 130px;
  background-color: #dcc2aa;
  border-radius: 15px;
`;
export const PostSummary = styled.div`
  min-height: 80px;
`;
export const PostHeader = styled.h3`
  font-size: 16px;
  margin: 10px 0;
`;
export const PostContent = styled.p`
  font-size: 10px;
  line-height: 12px;
  color: #666666;
`;
export const Tag = styled.span`
  font-family: Maplestory Light;
  display: inline-block;
  font-size: 9px;
  color: #666666;
  margin: 10px 5px 0 0;
`;
