import { FormContainer, Input, Submit, TextArea } from "./styles/contactStyles";
import {
  SectionContainer,
  SectionHeader,
  SectionHeaderContainer,
  SectionHeaderText,
} from "./styles/sectionStyles";
import '../index.css'
import emailjs from '@emailjs/browser'

export default function Contact() {
  return (
    <SectionContainer id="contact">
      <SectionHeaderContainer>
        <SectionHeaderText>Where to find me</SectionHeaderText>
        <SectionHeader>Contact</SectionHeader>
      </SectionHeaderContainer>
      <form>
        <FormContainer>
          <Input type="text" placeholder="Name" />
          <Input type="email" placeholder="Email address" />
          <TextArea
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="Message"
          ></TextArea>
          <Submit>Send</Submit>
        </FormContainer>
      </form>
    </SectionContainer>
  );
}
