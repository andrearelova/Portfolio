import React, {useState} from "react";
import "./App.css"
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';
import Grid from '@material-ui/core/Grid';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function App() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="App">
      <Dialog open={dialogOpen} onClose={() => {setDialogOpen(false)}} TransitionComponent={Transition}>
        <DialogContent>
        <Grid>
        <Grid item xs={12} md={6}>
        <h1> Hello</h1>
        </Grid>
        <Grid item md={7}>
        <h1> Hello</h1>
        </Grid>
        <Grid item>
        <h1> Hello</h1>
        </Grid>
        </Grid>
          <h1> Hello</h1>
        </DialogContent>
      </Dialog>
      <div className="HeaderBar">
        <h1>Portfolio</h1>
        <h1>Andrea Relova</h1>
        <h1>2020</h1>
      </div>
      <div className="Content">
        <h1 className="Welcome2">welcome!</h1>
        <h1 className="Welcome">welcome!</h1>
        <p className="Tagline">My name is Andrea Relova. I'm a computer science student at the University of Florida.<br></br>I strongly believe that design can be beautiful and useful and I<br></br>plan on pursuing a career that helps me find the intersection of both.</p>
        <h3 className="Latest">Latest Projects:</h3>
        <h3 className="Projects1">Six:</h3>
        <h3 className="Projects2">DailyUI:</h3>
        <h3 className="Projects3">Portfolio (This Website):</h3>
        <h3 className="Projects4">Some Other Designs:</h3>
        <h3 className="Projects5">More Projects Coming Soon!</h3>      
      </div>
      <footer className="FooterBar">
      <div className="FooterElement">
        <h3 className="FooterButtons">About Me</h3>
        <h3 className="FooterButtons" onClick={()=>{setDialogOpen(true)}}>Contact Me</h3>
        <a href="AndreaRelova.pdf" target="blank" className="linkText">
        <h3 className="FooterButtons"> Resume</h3>
        </a>
        </div>
        <div className="FooterFiller"/>
      </footer>
    </div>
  );
}

export default App;
