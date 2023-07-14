import "bootstrap/dist/css/bootstrap.min.css";
import "./frame-component.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const FrameComponent = () => {
  return (
    <div className="list-of-topics-page-for-phy-parent">
      <div className="list-of-topics-page-for-phy">
        <div className="property-1default">
          <div className="component-62">
            <img
              className="component-6-child3"
              alt=""
              src="/ellipse-2@2x.png"
            />
            <div className="component-6-child4" />
            <div className="profile2">profile</div>
            <a href="/prof">
            <img
              className="component-6-child5"
              alt=""
              src="/rectangle-16@2x.png"
            />
            </a>
          </div>
          <p className="one-lifego-achieve2">ONE LIFE....GO ACHIEVE!</p>
          <nav className="property-1default-child" />
          <button className="component-18">
            <button className="component-19">
              <div className="about-us11">ABOUT US</div>
              <div className="component-1-child2" />
              <div className="about-us12">
              
                <div className="about-us13">PHYSICS</div> 
              </div>
             
            </button>
          </button>
          <Link to={'/list-of-topics-page-for-chem'}>
          <button className="component-34">
            <button className="component-110">
              <div className="about-us11">ABOUT US</div>
              <div className="component-1-child2" />
              <div className="about-us12">
             
                <Button className="about-us16"  variant="primary">CHEMISTRY</Button>
                
              </div>
            </button>
            <div className="chemistry5" />
          </button>
          </Link>
          <p className="chemistry6">CHEMISTRY</p>
          <Link to={'/list-of-topics-page-for-maths'}>
          <button className="component-111">
            <button className="component-112">
              
              <div className="component-1-child2" />
              <div className="about-us12">
                <div className="about-us13">MATHS</div>
              </div>
            </button>
          </button>
          </Link>
          <p className="maths3">MATHS</p>
          <section className="component-52">
            <div className="component-5-child14" />
          
            <p className="electrostatic-potential-and2">
              Electrostatic Potential and Capacitance.
            </p>
            <button className="component-5-child16" />
            <p className="alternating-current2">Alternating Current.</p>
            <button className="component-5-child17" />
            <p className="electromagnetic-induction2">
              Electromagnetic Induction.
            </p>
            <button className="component-5-child18" />
            <p className="magnetism-and-matter2">Magnetism And Matter.</p>
            <div className="list-of-physics1">LIST OF PHYSICS TOPICS</div>
            < Link to="/quiz-page">
            <button className="component-5-child19" />
            <p className="electric-charges-and-container2" > Electric Charges & Fields </p>
         
           </Link>
           
             
           
            <button className="component-5-child20" />
            <button className="component-5-child21" />
            <p className="moving-charges-and2">Moving Charges and Magnetism.</p>
            <p className="current-electricity2">Current Electricity.</p>
          </section>

          <div className="rectangle-container">
            <div className="frame-inner" />
            <button className="component-113">
              <button className="component-112">
                <div className="about-us20">ABOUT US</div>
                <div className="component-1-child5" />
                <div className="about-us12">
                  <div className="about-us13">MATHS</div>
                </div>
              </button>
            </button>
            <p className="quiz-start">Start Quiz </p>
            <p className="instructions2">Instructions:</p>
            <div className="the-quiz-will-container2">
              <p className="blank-line4">&nbsp;</p>
              <p className="the-quiz-will2">
                1.The quiz will be of half an hour duration.
              </p>
              <p className="the-quiz-will2">
                2.You can attempt the quiz only once.
              </p>
              <p className="the-quiz-will2">{`3. There are a total 10 questions. `}</p>
              <p className="the-quiz-will2">
                4. Each question carries one mark. No negative marking for wrong
                answers.
              </p>
              <p className="questions-are-of2">
                5. Questions are of Multiple Choice.
              </p>
            </div>
          </div>
          <p className="physics3">PHYSICS</p>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
