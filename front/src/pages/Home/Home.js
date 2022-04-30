import { useNavigate } from "react-router-dom";
import Slide from "../../components/Slide/Slide";
import Image from "../../components/Image";
import { HomeContainer, HomeWrap } from "../../styles/HomeStyle";
import { img } from "../../utils/imgImport";

const BANNERS = [
  <Image url={img.banner1} alt={"banner1"} />,
  <Image url={img.banner2} alt={"banner2"} />,
  <Image url={img.banner3} alt={"banner3"} />,
];

function Home() {
  const navigate = useNavigate();

  return (
    <HomeContainer>
      <HomeWrap>
        <Slide elements={BANNERS} />
      </HomeWrap>
    </HomeContainer>
  );
}

export default Home;
