import Slide from "components/Slide/Slide";
import { Img } from "styles/Components/ComponentStyle";
import { HomeContainer, FullBanner } from "styles/Home/HomeStyle";
import { img } from "utils/imgImport";

const BANNERS = [
  <Img url={img.banner1} alt={"banner1"} />,
  <Img url={img.banner2} alt={"banner2"} />,
  <Img url={img.banner3} alt={"banner3"} />,
];

function Home() {
  return (
    <HomeContainer>
      <FullBanner>
        <Slide elements={BANNERS} />
      </FullBanner>
    </HomeContainer>
  );
}

export default Home;
