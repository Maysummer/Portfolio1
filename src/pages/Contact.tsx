import { FormContainer, Input, Submit, TextArea } from "./styles/contactStyles";
import {
  SectionContainer,
  SectionHeader,
  SectionHeaderContainer,
  SectionHeaderText,
} from "./styles/sectionStyles";
import '../index.css'

export default function Contact() {
  return (
    <SectionContainer id="contact">
      <SectionHeaderContainer>
        <SectionHeaderText>Where to find me</SectionHeaderText>
        <SectionHeader>Contact</SectionHeader>
      </SectionHeaderContainer>
      <form action="">
        <FormContainer>
          <Input type="text" placeholder="First name" />
          <Input type="text" placeholder="Last name" />
          <Input type="email" placeholder="Email address" />
          <Input type="number" placeholder="Phone number" />
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
