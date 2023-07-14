import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import "./ProfilePage.css";
import { Link } from "react-router-dom";
const ProfilePage = () => {
  return (
    <div className="profile-page">
      <div className="rectangle-parent">
        <div className="component-child" />
        <h1 className="quizzylicious">Quizzylicious</h1>
        <nav className="component-item" />
        <Button className="component-1" variant="primary">
          Contact us
        </Button>

      
      </div>
      <div className="profile-page-child" />
      <img className="profile-page-item" alt="" src="/ellipse-2@2x.png" />
      <div className="rectangle-group">
        <div className="component-inner" />
        <div className="rectangle-div" />
        <b className="subjects">{`Subjects `}</b>
        <div className="component-child1" />
        <b className="attempted">Attempted</b>
        <div className="component-child2" />
        <b className="unattempted">{`Unattempted `}</b>
      </div>
      <div className="rectangle-container">
        <div className="component-child3" />
        <div className="hey-there-lets-container">
          <p className="hey-there">Hey There!</p>
          <p className="hey-there">lets check your progress.</p>
        </div>
      </div>
      <Link to="/">
     <button  className="home-page"> Home Page </button> 
     </Link>
    </div>
  );
};

export default ProfilePage;
