import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import "./LandingPage.css";
import KitchenBg from "./KitchenBg";

const getKitchenBackground = () => {
  return <KitchenBg />;
};

function LandingPage({ setIsLanding }) {
  const switchLink = () => {
    setIsLanding(false);
  };

  return (
    <>
      {getKitchenBackground()}

      <div className="static-container">
        <div className="LogoBtn">
          PastaMe
          <img src="images/pasta-logo.png" className="pasta-logo" />
        </div>

        <div className="text-container">
          <p className="header-textbox">How to use</p>

          <div className="row-container">
            <p className="one number">1</p>
            <p className="row-text">Upload photos of your ingredients</p>
          </div>

          <div className="row-container">
            <p className="row-text row-text-two">Get recommended recipes based on your available ingredients</p>
            <p className="two number">2</p>
          </div>

          <div className="row-container">
            <p className="three number">3</p>
            <p className="row-text">Pick your recipe and cook!</p>
          </div>
        </div>

        <Link to="/photoUpload">
          <Button className="StartBtn" onClick={switchLink}>
            Start Cooking!
          </Button>
        </Link>
      </div>
    </>
  );
}

export default LandingPage;
