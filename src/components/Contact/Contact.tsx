import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project? </p>
        <p>Contact me now for a Free consultation.</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:anand.abhisheek@gmail.com">
          <img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:anand.abhisheek@gmail.com">anand.abhisheek@gmail.com</a>
        </div>
        <div>
        <a href="tel:+916307255290"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+919650734826">(+91) 9650734826</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}