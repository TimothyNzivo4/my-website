import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: #181f2a;
  color: #fff;
  font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
  display: flex;
  flex-direction: column;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 2rem 3rem 0 3rem;
  font-size: 1.1rem;
  gap: 2.5rem;
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  opacity: 0.85;
  transition: color 0.2s, opacity 0.2s;
  &:hover {
    color: #ff5c3a;
    opacity: 1;
  }
`;

const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 70vh;
  padding: 4rem 3rem 2rem 3rem;
  box-sizing: border-box;
`;

const Title = styled(motion.h1)`
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 1.2rem;
  color: #fff;
  text-align: center;
`;

const Subtitle = styled(motion.h2)`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 2rem;
  color: #ff5c3a;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

const Input = styled.input`
  padding: 0.8rem 1.2rem;
  border-radius: 12px;
  border: 1px solid #ffd700;
  font-size: 1rem;
  background: #222a36;
  color: #fff;
`;

const Textarea = styled.textarea`
  padding: 0.8rem 1.2rem;
  border-radius: 12px;
  border: 1px solid #ffd700;
  font-size: 1rem;
  min-height: 120px;
  background: #222a36;
  color: #fff;
`;

const SubmitButton = styled.button`
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: #fff;
  background: #ff5c3a;
  border-radius: 32px;
  border: none;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(255,92,58,0.08);
  transition: background 0.2s;
  &:hover {
    background: #fff;
    color: #ff5c3a;
  }
`;

const SocialLinks = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1.5rem;
  justify-content: center;
`;

const SocialLink = styled.a`
  color: #ffd700;
  font-size: 1.5rem;
  text-decoration: none;
  &:hover {
    color: #ff5c3a;
  }
`;

export default function Contact() {
  return (
    <Container>
      <Nav>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/projects">Projects</NavLink>
        <NavLink href="/contact">Contacts</NavLink>
      </Nav>
      <ContactSection>
        <Title initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>Contact Me</Title>
        <Subtitle initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }}>Let's work together</Subtitle>
        <Form>
          <Input type="text" placeholder="Your Name" required />
          <Input type="email" placeholder="Your Email" required />
          <Textarea placeholder="Your Message" required />
          <SubmitButton type="submit">Send Message</SubmitButton>
        </Form>
        <SocialLinks>
          <SocialLink href="https://twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</SocialLink>
          <SocialLink href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</SocialLink>
          <SocialLink href="mailto:your@email.com">Email</SocialLink>
        </SocialLinks>
      </ContactSection>
    </Container>
  );
}
