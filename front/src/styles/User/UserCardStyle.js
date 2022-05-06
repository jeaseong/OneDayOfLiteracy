import styled from "styled-components";

export const CardContainer = styled.section`
  flex-direction: column;
  width: 100%;
  height: 180px;
  padding: 20px;
  border-bottom: solid 1px rgba(0, 0, 0, 0.2);
  @media screen and (min-width: 768px) {
    height: 250px;
  }
`;
export const CardBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardHeader = styled.div`
  flex: 0;
  margin-right: 10px;
  @media screen and (min-width: 768px) {
    margin-right: 40px;
  }
`;

export const UserProfileContainer = styled.div`
  display: flex;
`;

export const ProfileImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  /* box-shadow: 5px 5px 10px grey; */
  @media screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

export const EditContainer = styled.div`
  position: relative;
`;

export const ProfileChangeBox = styled.div`
  height: 0;
  position: absolute;
  top: 14px;
  right: 0;
`;
