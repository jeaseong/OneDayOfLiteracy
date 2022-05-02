import Slide from "../../components/Slide/Slide";
import { Img } from "../../styles/Components/ComponentStyle";
import { HomeContainer } from "../../styles/HomeStyle";
import { img } from "../../utils/imgImport";

const BANNERS = [
  <Img url={img.banner1} alt={"banner1"} />,
  <Img url={img.banner2} alt={"banner2"} />,
  <Img url={img.banner3} alt={"banner3"} />,
];

function Home() {
  return (
    <HomeContainer>
      <Slide elements={BANNERS} />
    </HomeContainer>
  );
}

export default Home;
