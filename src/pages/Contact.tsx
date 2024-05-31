import { FormContainer, Input, Submit, TextArea } from "./styles/contactStyles";
import {
  SectionContainer,
  SectionHeader,
  SectionHeaderContainer,
  SectionHeaderText,
} from "./styles/sectionStyles";
import "../index.css";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    {
      formRef.current &&
        emailjs
          .sendForm("service_admklbh", "template_c3q715l", formRef.current, {
            publicKey: "1jcND90J3xuN_bhIP",
          })
          .then(
            () => {
              console.log("SUCCESS!");
              toast.success("Message sent!", {
                theme: "dark",
                type: "success"
              });
              formRef.current?.reset();
            },
            (error) => {
              console.log("FAILED...", error.text);
              toast.error("There was an error in your form", {
                theme: "dark",
                type: "error"
              });
              formRef.current?.reset();
            }
          );
    }
  }

  return (
    <SectionContainer id="contact">
      <SectionHeaderContainer>
        <SectionHeaderText>Where to find me</SectionHeaderText>
        <SectionHeader>Contact</SectionHeader>
      </SectionHeaderContainer>
      <form onSubmit={handleSubmit} ref={formRef}>
        <FormContainer>
          <Input type="text" placeholder="Name" name="name" required />
          <Input
            type="email"
            placeholder="Email address"
            name="email"
            required
          />
          <TextArea
            id=""
            cols={30}
            rows={10}
            placeholder="Message"
            name="message"
            required
          ></TextArea>
          <Submit>Send</Submit>
        </FormContainer>
      </form>
      <ToastContainer />
    </SectionContainer>
  );
}
