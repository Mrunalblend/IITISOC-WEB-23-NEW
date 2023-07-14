import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./l-i-s-t-o-f-t-o-p-i-c-s-p-a-g-e-f-o-r-c-h-e-m.css";
const LISTOFTOPICSPAGEFORCHEM = () => {
  return (
    <div className="list-of-topics-page-for-chem">
      
      <div className="component-6">
      
        <img className="component-6-child" alt="" src="/ellipse-2@2x.png" />
        <a href="/prof">
        <div className="component-6-item" />
        </a>
        <div className="profile">profile</div>
     
        
        <img className="component-6-inner" alt="" src="/rectangle-16@2x.png" />
       
      </div>
      
      <p className="one-lifego-achieve">ONE LIFE....GO ACHIEVE!</p>
      <nav className="list-of-topics-page-for-chem-child" />
      <button className="component-3">
        <Button className="component-1" variant="primary">
          About us
        </Button>
        <p className="chemistry">CHEMISTRY</p>
      </button>
      <Link to={'/list-of-topics-page-for-maths'}>
      <button className="component-4">
        <Button className="component-1" variant="primary">
          About us
        </Button>
        <p className="maths">MATHS</p>
      </button>
      </Link>
     
      <div className="component-5">
        <div className="component-5-child" />
        <div className="component-5-item" />
        <p className="electrostatic-potential-and">Biomolecules</p>
        <button className="component-5-inner" />
        <p className="alternating-current">Amines</p>
        <button className="component-5-child1" />
        <p className="electromagnetic-induction">Surface Chemistry.</p>
        <button className="component-5-child2" />
        <p className="magnetism-and-matter">Chemical Kinetics.</p>
        <p className="list-of-physics">LIST OF CHEMISTRY TOPICS</p>
        <button className="component-5-child3" />
        <b className="electric-charges-and-container">
          <p className="electric-charges">{`Electric Charges `}</p>
          <p className="electric-charges">and Fields.</p>
        </b>
        <button className="component-5-child4" />
        <button className="component-5-child5" />
        <p className="moving-charges-and">Electrochemistry.</p>
        <b className="current-electricity" />
      </div>
      <p className="solutions">Solutions</p>
      <div className="rectangle-parent">
        <div className="frame-child" />
        <p className="instructions">Instructions:</p>
        <p className="the-quiz-will-container">
          <span className="blank-line">
            <span className="blank-line1">&nbsp;</span>
          </span>
          <span className="the-quiz-will-be-of-half-an-ho">
            <span className="the-quiz-will">
              1.The quiz will be of half an hour duration.
            </span>
          </span>
          <span className="blank-line">
            <span className="the-quiz-will">
              2.You can attempt the quiz only once.
            </span>
          </span>
          <span className="blank-line">
            <span className="the-quiz-will">{`3. There are a total 10 questions. `}</span>
          </span>
          <span className="blank-line">
            <span className="the-quiz-will">
              4. Each question carries one mark. No negative marking for wrong
              answers.
            </span>
          </span>
          <span className="blank-line">
            <span className="the-quiz-will">
              5. Questions are of Multiple Choice.
            </span>
          </span>
        </p>
        <button className="component-31">
          <Button className="component-1" variant="primary">
            About us
          </Button>
          
          <p className="chemistry">START QUIZ</p>
        </button>
      </div>
      <p className="the-solid-states">The solid states</p>
      <button className="list-of-topics-page-for-chem-item" />
      <Link to ="/frame-6">
      <button><p className="physics">PHYSICS</p></button>
      </Link>
    </div>
  );
};

export default LISTOFTOPICSPAGEFORCHEM;
