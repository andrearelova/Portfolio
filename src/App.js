import React, {useState} from "react";
import "./App.css"
import {Dialog, DialogContent, Slide, Grid, TextField, Button} from "@material-ui/core"

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const projects = [
    {
      name:"Six:",
      img:"Six.png",
      description:"Six is a group web application created in July-August 2020 that is inspired by the \"Six Degrees of Kevin Bacon\" game. The web application asks the user to input two musical artists and then utilizes the Spotify Web API, along with a Breadth-First Search algorithm, to determine how many \"degrees of separation\" lie between the two artists (a song collaboration counts as one degree). I did the front end design and helped on the implementation of it. I also helped work on the API implementation. The project was created using React/Node.",
      link:"https://github.com/andrearelova/Portfolio"
    },
    {
      name:"DailyUI (Currently in Progress):",
      img:"DailyUI2.png",
      description:"DailyUI is an email subscription service that gives users a design prompt everyday, such as a landing page or an app icon. The picture above is from Day 2's prompt, which was to design a checkout page. My designs were made with Adobe XD.",
      link:""
    },
    {
      name:"Portfolio (This Website):",
      img:"portfolio-mockup.png",
      description:"This portfolio website was created throughout the summer of 2020. The mockup above was made on Photoshop (because I created it before knowing how to use Adobe XD). The portfolio was made with React/Node and uses some Material UI styling components.",
      link:""
    },
    {
      name:"Some Other Designs:",
      img:"",
      description:"These are some other designs I have made, either for myself, friends, or some school organizations I am involved in. The details, as well as the software used to make each one, is specified above.",
      link:""
    },
  ]
  const handleContactClose = () => {
    setContactOpen(false);
  }
  const submitEmail = (e) => {
    e.preventDefault();



    handleContactClose();
  }
  return (
    <div className="App">
      <Dialog open={contactOpen} onClose={handleContactClose} TransitionComponent={Transition}>
        <DialogContent className="ContactMe">
        <h1>Send a message to andreamrelova@gmail.com:</h1>
        <form  className="ContactForm" onSubmit={submitEmail} >
          <TextField id="outlined-basic" label="Your Email" required={true} value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
          <TextField id="outlined-basic" label="Message" required={true} value={message} onChange={(e)=>{setMessage(e.target.value)}}/>
          <Button type="submit">Send</Button>
        </form>
        </DialogContent>
      </Dialog>
      <div className="HeaderBar">
        <h1>Portfolio</h1>
        <h1>Andrea Relova</h1>
        <h1>2020</h1>
      </div>
      <div className="Content">
      <div className="WelcomeWrapper">
        <h1 className="Welcome2">welcome!</h1>
        <h1 className="Welcome">welcome!</h1>
      </div>
        <p className="Tagline">My name is Andrea Relova. I'm a computer science student at the University of Florida.<br></br>I strongly believe that design can be both beautiful and accessible and I<br></br>plan on pursuing a career that helps me find the intersection of both.</p>
        <h3 className="Latest">Latest Projects:</h3>
        {projects.map((project, index)=>
          <a className="Link" key={index} href={project.link} target="blank">
          <div className="Project">
            <h3 className="Projects">{project.name}</h3>
              <img src={project.img} className="ProjectsMedia"/>
            <p className="ProjectsDescription">{project.description}</p>
          </div>
          </a>
        )}
        <h3 className="Latest">More Projects Coming Soon!</h3>
      </div>
      <footer className="FooterBar">
      <div className="FooterElement">
        <h3 className="FooterButtons"onClick={()=>{setAboutOpen(true)}}>About Me</h3>
        <h3 className="FooterButtons" onClick={()=>{setContactOpen(true)}}>Contact Me</h3>
        <a href="AndreaRelova.pdf" target="blank" className="linkText">
          <h3 className="FooterButtons"> Resume</h3>
        </a>
        <a href="https://github.com/andrearelova" target="blank" className="linkText">
          <h3 className="FooterButtons"> GitHub</h3>
        </a>
        <a href="https://www.linkedin.com/in/andrea-relova-206163194/" target="blank" className="linkText">
          <h3 className="FooterButtons"> LinkedIn</h3>
        </a>
        <a href="https://dribbble.com/andrearelova" target="blank" className="linkText">
          <h3 className="FooterButtons"> Dribbble</h3>
        </a>
        <Dialog open={aboutOpen} onClose={() => {setAboutOpen(false)}} TransitionComponent={Transition}>
          <DialogContent className="AboutMe">
            <h1 className="AboutMeTitle">About Me</h1>
            <p className="AboutMeText">I'm a 20 year old computer science major from Jacksonville, Florida. I am also pursuing a minor in linguistics, which I chose because my experience with learning French and Spanish in school led me to realize that my passion for languages lies with learning about the structure, patterns and uses of it and less so with a specific language. I am very interested in interaction design, product design and user experience design and would like to pursue a career in such someday. I realized this because in my computer science projects, I have found the greatest satisfaction and sense of control from the designing portions of them. I continue to work on developing my "eye for design" and my sense of empathy everyday, since being a designer involves one putting themselves in the users' shoes.</p>
          </DialogContent>
        </Dialog>
        </div>
        <div className="FooterFiller"/>
      </footer>
    </div>
  );
}

export default App;
