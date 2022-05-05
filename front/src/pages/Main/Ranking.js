import {
  RankImg,
  RankingBox,
  RankingContainer,
  RankNickName,
} from "../../styles/Main/MainStyle";
import { img } from "../../utils/imgImport";

const tempRanking = [
  { _id: "1", nickname: "대장유혜선", level: 4 },
  { _id: "2", nickname: "홍진호", level: 3 },
  { _id: "3", nickname: "응애나3등", level: 2 },
];

function Ranking() {
  return (
    <RankingContainer>
      {tempRanking.map((user, index) => (
        <RankingBox key={user._id}>
          <RankImg src={img.rank[index]} alt="rankImage" />
          <RankImg src={img.level[user.level]} />
          <RankNickName>{user.nickname}</RankNickName>
        </RankingBox>
      ))}
    </RankingContainer>
  );
}

export default Ranking;
