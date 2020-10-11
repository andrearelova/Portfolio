import React, {useState} from "react";
import "./App.css"
import Contact from "./Contact.js"
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";
import {Dialog, DialogContent, Slide} from "@material-ui/core"
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const projects = [
    {
      name:"Laundr Wireframes Presentation:",
      img:"Laundr-Wireframe.png",
      description:"For my software engineering class, we were assigned a group project to create an e-commerce store for a local online laundry company looking to release their new line of laundry detergent. I designed the webpages using Adobe XD. We were asked to give a presentation that gives heavy emphasis on transition and interactions, so my designs are available in a Google Slides presentation with annotations that walk the viewer through the available interactions.",
      link:"https://docs.google.com/presentation/d/189T8bqCn4pFjnSHS7IXGPLt91wnSzTRz5kDeId-uccE/edit#slide=id.p"
    },
    {
      name:"User Experience Design Class",
      img:"UXClass.png",
      description:"I am currently in a User Experience Design class at UF. Here is some of my work from that class.",
      link:"/uxclass"
    },
    {
      name:"Six:",
      img:"Six.png",
      description:"Six is a group web application created in July-August 2020 that is inspired by the \"Six Degrees of Kevin Bacon\" game. The web application asks the user to input two musical artists and then utilizes the Spotify Web API, along with a Breadth-First Search algorithm, to determine how many \"degrees of separation\" lie between the two artists (a song collaboration counts as one degree). I did the front end design and helped on the implementation of it. I also helped work on the API implementation. The project was created using React/Node.",
      link:"https://github.com/andrearelova/Portfolio"
    },
    {
      name:"DailyUI (Currently in Progress):",
      img:"DailyUI2.png",
      description:"DailyUI is an email subscription service that gives users a design prompt everyday, such as a landing page or an app icon. The picture above is from Day 2's prompt, which was to design a checkout page. My designs were made with Adobe XD and are viewable on Dribbble.",
      link:"https://dribbble.com/andrearelova"
    },
    {
      name:"Portfolio (This Website):",
      img:"portfolio-mockup.png",
      description:"This portfolio website was created throughout the summer of 2020. The mockup above was made on Photoshop (because I created it before knowing how to use Adobe XD). The portfolio was made with React/Node and uses some Material UI styling components. I am continuing to work on making my portfolio mobile responsive.",
      link:""
    },
    {
      name:"Some Other Designs:",
      img:"OtherDesigns.svg",
      description:"These are some other designs I have made, either for myself, friends or some school organizations I am involved in.",
      link:"/designs"
    }
  ]


  const Landing = () => (
    <div className="App">
    <Dialog open={aboutOpen} onClose={() => {setAboutOpen(false)}} TransitionComponent={Transition}>
      <DialogContent className="AboutMe">
        <h1 className="AboutMeTitle">About Me</h1>
        <p className="AboutMeText">I'm a 20 year old computer science major from Jacksonville, Florida. I am also pursuing a minor in linguistics, which I chose because my experience with learning French and Spanish in school led me to realize that my passion for languages lies with learning about the structure, patterns and uses of it and less so with a specific language. I am very interested in interaction design, product design and user experience design and would like to pursue a career in such someday. I realized this because in my computer science projects, I have found the greatest satisfaction and sense of control from the design portion of the development process. I hope to learn more about the user experience design process and the principles that make a design both aesthetically appealing and accessible.</p>
      </DialogContent>
    </Dialog>
      <Contact contactOpen={contactOpen} setContactOpen={setContactOpen}/>
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
        <p className="Tagline">My name is Andrea Relova. I'm a computer science student at the University of Florida. I strongly believe that design can be both beautiful and accessible and I plan on pursuing a career that helps me find the intersection of both.</p>
        <h3 className="Latest">Latest Projects:</h3>
        {projects.map((project, index)=>
          <a className="Link" key={index} href={project.link} target="blank">
          <div className="Project">
            <h3 className="Projects">{project.name}</h3>
              <img src={project.img} alt="" className="ProjectsMedia"/>
            <p className="ProjectsDescription">{project.description}</p>
          </div>
          </a>
        )}
        <h3 className="Latest">More Projects Coming Soon!</h3>
      </div>
      <footer className="FooterBar">
      <div className="FooterElement">
        <h3 className="FooterButtons"onClick={()=>{setAboutOpen(true)}}>About Me  </h3>
        <h3 className="FooterButtons" onClick={()=>{setContactOpen(true)}}>  Contact Me</h3>
        <a href="AndreaRelova.pdf" target="blank" className="linkText">
          <h3 className="FooterButtons">  Resume</h3>
        </a>
        <a href="https://github.com/andrearelova" target="blank" className="linkText">
          <h3 className="FooterButtons">  GitHub</h3>
        </a>
        <a href="https://www.linkedin.com/in/andrea-relova-206163194/" target="blank" className="linkText">
          <h3 className="FooterButtons">  LinkedIn</h3>
        </a>
        <a href="https://dribbble.com/andrearelova" target="blank" className="linkText">
          <h3 className="FooterButtons">  Dribbble</h3>
        </a>

        </div>
        <div className="FooterFiller"/>
      </footer>
    </div>
  );

  const UXClass = () => (
    <div className="App">
      <div className="HeaderBar">
        <h1>Portfolio</h1>
        <h1>Andrea Relova</h1>
        <h1>2020</h1>
      </div>
      <div className="Content">
        <h1 className="Latest">User Experience Design Classwork:</h1>
        <h3 className="OtherTitle">Design Process Diagram:</h3>
        <img src="DesignProcess.png" alt="" className="DesignProc"/>
        <p className="OtherDescription">This was a group assignment that describes the design process that companies use, portrayed in a flyer. </p>
        <h3 className="OtherTitle">UX Personas:</h3>
        <img src="Persona1-CEN4722.png" alt="" className="Personas"/>
        <img src="Persona2-CEN4722.png" alt="" className="Personas"/>
        <p className="OtherDescription">In my User Experience design class, we have been doing the early design process steps for a hypothetical mobile app for students at my university to find resources for COVID-19. In this process, we ran focus groups (with classmates as participants), created personas, and created scenarios and storyboards. Here are two personas I created as an assignment: they are two hypothetical focal users of this app.</p>
        <h3 className="OtherTitle">Control Panel Flyers:</h3>
        <img src="IndivProjMidpoint.png" alt="" className="Panels"/>
        <img src="CEN4722-Indiv-Final.png" alt="" className="Panels"/>
        <p className="OtherDescription">For an individual project, we were assigned two different digital posters. For the first poster, we had to analyze 10 physical control panels' flaws and then make 10 potential redesigns of one of those flawed control panels. In the second poster, we were assigned to weave all the potential redesigns into one final redesign. Both posters were made with Adobe InDesign, but I made final redesign is from Adobe XD and then exported it as a PNG to the poster.</p>
      </div>

      <footer className="FooterBar">
        <div className="FooterElement">
          <a href="/" className="linkText">
            <h3 className="FooterButtons">Home</h3>
          </a>
        </div>
      </footer>
    </div>
  );

  const Designs = () => (
    <div className="App">
      <div className="HeaderBar">
        <h1>Portfolio</h1>
        <h1>Andrea Relova</h1>
        <h1>2020</h1>
      </div>
      <div className="Content">
        <h1 className="Latest">Some Other Designs:</h1>
        <h3 className="OtherTitle">DiversiPhi Rush Infographic:</h3>
        <img src="diversity-rush1.png" alt="" className="DiversiphiInfog"/>
        <img src="diversity-rush2.png" alt="" className="DiversiphiInfog"/>
        <img src="diversity-rush3.png" alt="" className="DiversiphiInfog"/>
        <p className="OtherDescription">I created this three page infographic (using Adobe Photoshop) for my sorority to provide tips on how to talk about diversity and inclusion during Panhellenic formal sorority recruitment. Diversiphi is my sorority's diversity and inclusion committee where I serve as one of the Innovation Chairs.</p>
        <h3 className="OtherTitle">DiversiPhi Origami Activity Flyer:</h3>
        <img src="DiversiPhi-Origami.png" alt="" className="Other"/>
        <p className="OtherDescription">I created this flyer (using Adobe InDesign) to advertise an origami workshop for my sorority led by the Diversity and Inclusion committee. </p>
        <h3 className="OtherTitle">Six Wireframes</h3>
        <img src="six-mockup.jpg" alt="" className="SixWireframe"/>
        <p className="OtherDescription">This was the original wireframe for my Six web application. It was made on Photoshop (I made this before knowing how to use Adobe XD).</p>
      </div>
      <footer className="FooterBar">
        <div className="FooterElement">
          <a href="/" className="linkText">
            <h3 className="FooterButtons">Home</h3>
          </a>
        </div>
      </footer>
    </div>
  );

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route path="/designs" component={Designs}/>
          <Route path="/uxclass" component={UXClass}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
