import './LandingPage.css';
import landingPageBackground from '../../assets/landing-page-pizza.jpg';

const LandingPage = () => {
  return (
    <div>
      <img
        src={landingPageBackground}
        className="landing-page-img"
        alt="deep dish pizza"
      ></img>
    </div>
  );
};

export default LandingPage;
