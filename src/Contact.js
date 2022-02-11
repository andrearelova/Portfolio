import React, {useState} from "react";
import {Dialog, DialogContent, Slide, TextField, Button} from "@material-ui/core"
import emailjs from 'emailjs-com';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Contact = ({contactOpen, setContactOpen}) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const userID = process.env.REACT_APP_USER_ID;

  const handleContactClose = () => {
    setContactOpen(false);
    setEmail("");
    setMessage("");
  }
  const submitEmail = async (e) => {
    e.preventDefault();
    emailjs.send("service_2ekna0n", "template_0zqvn5j", {email, message}, userID);
    handleContactClose();
  }

  return <Dialog open={contactOpen} onClose={handleContactClose} TransitionComponent={Transition}>
    <DialogContent className="ContactMe">
    <h1>Send a message to andreamrelova@gmail.com :</h1>
    <form className="ContactForm" onSubmit={(e) => submitEmail(e)}>
      <TextField variant="standard" label="Your Email" required={true} value={email} onChange={(e)=>{e.preventDefault(); setEmail(e.target.value)}}/>
      <TextField variant="standard" label="Message" required={true} value={message} onChange={(e)=>{e.preventDefault(); setMessage(e.target.value)}}/>
      <Button type="submit">Send</Button>
    </form>
    </DialogContent>
  </Dialog>
}
export default Contact;
