import Card from "react-bootstrap/Card";
import Footer from "../layout/Footer";
import BryggenMobile from "../../assets/img/cover_mobile.png";
import Bryggen from "../../assets/img/cover.png";
import TypeAhead from "../layout/TypeAhead";
import InfoCards from "../layout/InfoCards";
import Icons from "../../assets/icons/Icons";

export default function HomePage() {
  return (
    <>
      <Card>
        <Card.Img
          src={Bryggen}
          srcSet={`${BryggenMobile} 300w, ${Bryggen} 1000w`}
          alt="Cover image"
        />
      </Card>

      <Icons />

      <TypeAhead />

      <InfoCards />

      <Footer />
    </>
  );
}
