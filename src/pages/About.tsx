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

const AboutSection = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  min-height: 70vh;
  padding: 4rem 3rem 2rem 3rem;
  box-sizing: border-box;
`;

const AboutText = styled.div`
  max-width: 520px;
  flex: 1 1 400px;
`;

const Title = styled(motion.h1)`
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 1.2rem;
  color: #fff;
`;

const Subtitle = styled(motion.h2)`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 2rem;
  color: #ff5c3a;
`;

const Bio = styled(motion.p)`
  font-size: 1.15rem;
  color: #bfc8d6;
  margin-bottom: 2.5rem;
`;

const Features = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Feature = styled(motion.div)`
  background: #1d2533;
  border-radius: 12px;
  padding: 1.2rem 1.8rem;
  color: #fff;
  font-size: 1.1rem;
  box-shadow: 0 2px 8px rgba(255,92,58,0.08);
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

const FeatureIcon = styled.span`
  font-size: 2rem;
  color: #ff5c3a;
`;

const AboutImageWrapper = styled.div`
  position: relative;
  width: 340px;
  height: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 1 340px;
`;

const AboutImage = styled(motion.img)`
  width: 320px;
  height: 400px;
  object-fit: cover;
  border-radius: 18px;
  box-shadow: 0 8px 32px rgba(255,92,58,0.18);
  z-index: 2;
`;

export default function About() {
  return (
    <Container>
      <Nav>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/projects">Projects</NavLink>
        <NavLink href="/contact">Contacts</NavLink>
      </Nav>
      <AboutSection>
        <AboutText>
          <Title initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>About Timothy</Title>
          <Subtitle initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }}>Web Developer & Designer</Subtitle>
          <Bio initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.1 }}>
            Timothy is a passionate developer and designer who loves building modern, minimalistic web experiences. With a background in software engineering and a keen eye for design, Timothy combines technical expertise with creative thinking to deliver impactful digital solutions.
          </Bio>
          <Features>
            <Feature initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <FeatureIcon>💻</FeatureIcon>
              <span>Front-end Development: React, TypeScript, CSS, Vite</span>
            </Feature>
            <Feature initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }}>
              <FeatureIcon>🎨</FeatureIcon>
              <span>UI/UX Design: Figma, Adobe XD, Minimal & Editorial Styles</span>
            </Feature>
            <Feature initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.1 }}>
              <FeatureIcon>🚀</FeatureIcon>
              <span>Performance & Accessibility: Fast, responsive, and inclusive web apps</span>
            </Feature>
            <Feature initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.3 }}>
              <FeatureIcon>🤝</FeatureIcon>
              <span>Collaboration: Works well in teams, communicates ideas clearly</span>
            </Feature>
          </Features>
        </AboutText>
        <AboutImageWrapper>
          <AboutImage src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=400&h=400&facepad=2&q=80" alt="Timothy" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }} style={{ width: '520px', height: '400px' }} />
        </AboutImageWrapper>
      </AboutSection>
    </Container>
  );
}
