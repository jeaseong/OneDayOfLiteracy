import { useNavigate } from "react-router-dom";
import Slide from "../../components/Slide/Slide";
import { Img } from "../../styles/Components/ComponentStyle";
import { HomeContainer, HomeWrap } from "../../styles/HomeStyle";
import { img } from "../../utils/imgImport";

const BANNERS = [
  <Img url={img.banner1} alt={"banner1"} />,
  <Img url={img.banner2} alt={"banner2"} />,
  <Img url={img.banner3} alt={"banner3"} />,
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
