import Card from "react-bootstrap/Card";
import Footer from "../layout/Footer";
import BryggenH from "../../assets/img/BryggenH.png";
import BryggenV from "../../assets/img/BryggenV.png";
import TypeAhead from "../layout/TypeAhead";
import InfoCards from "../layout/InfoCards";
import Icons from "../../assets/icons/Icons";

export default function HomePage() {
  return (
    <>
      <Card>
        <Card.Img
          src={BryggenH}
          srcSet={`${BryggenV} 300w, ${BryggenH} 1000w`}
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
