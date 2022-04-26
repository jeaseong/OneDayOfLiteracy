import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  align-items: center;
  justify-content: center;
  //   gap: 1rem;
  // grid-template-columns:repeat(auto-fit, minmax(10rem, 1fr))
  margin: 100px 200px;
  border-radius: 8px;
`;

export const Post = styled.div`
  width: 25%;
  height: 30vh;
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
  height: 50%;
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
