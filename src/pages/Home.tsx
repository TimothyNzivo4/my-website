import styled from 'styled-components';
import { motion } from 'framer-motion';
const personImg = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&h=400&facepad=2&q=80'; // Reliable stock image

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

const Hero = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  min-height: 70vh;
  padding: 4rem 3rem 2rem 3rem;
  box-sizing: border-box;
`;

const HeroText = styled.div`
  max-width: 520px;
  flex: 1 1 400px;
`;

const Hello = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #fff;
`;

const Name = styled(motion.h1)`
  font-size: 2.8rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #fff;
`;

const Role = styled(motion.h2)`
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #fff;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-bottom: 2.5rem;
`;

const PrimaryButton = styled(motion.button)`
  background: #ff5c3a;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.9rem 2.2rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(255,92,58,0.12);
  transition: background 0.2s;
  &:hover {
    background: #fff;
    color: #ff5c3a;
  }
`;

const SecondaryButton = styled(motion.button)`
  background: transparent;
  color: #fff;
  border: 2px solid #ff5c3a;
  border-radius: 8px;
  padding: 0.9rem 2.2rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: #ff5c3a;
    color: #fff;
  }
`;

const HeroImageWrapper = styled.div`
  position: relative;
  width: 340px;
  height: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 1 340px;
`;

const HeroImage = styled(motion.img)`
  width: 320px;
  height: 400px;
  object-fit: cover;
  border-radius: 18px;
  box-shadow: 0 8px 32px rgba(255,92,58,0.18);
  z-index: 2;
`;

const SkillsBar = styled.div`
  display: flex;
  gap: 2.5rem;
  justify-content: center;
  background: #1d2533;
  padding: 1.2rem 0;
  font-size: 1.1rem;
  color: #bfc8d6;
  font-weight: 500;
`;

export default function Home() {
  return (
    <Container>
      <Nav>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/projects">Projects</NavLink>
        <NavLink href="/contact">Contacts</NavLink>
      </Nav>
      <Hero>
        <HeroText>
          <Hello initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>Hello<span style={{ color: '#ff5c3a' }}>.</span></Hello>
          <Name initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }}>I'm Timothy</Name>
          <Role initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.1 }}>Software Developer</Role>
          <ButtonRow>
            <PrimaryButton whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.97 }} onClick={() => window.location.href = '/contact'}>Got a project?</PrimaryButton>
            <SecondaryButton whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.97 }} onClick={() => window.location.href = '/resume'}>My resume</SecondaryButton>
          </ButtonRow>
        </HeroText>
        <HeroImageWrapper>
          <HeroImage src={personImg} alt="Timothy" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }} />
        </HeroImageWrapper>
      </Hero>
      <SkillsBar>
        <span>HTML5</span>
        <span>CSS</span>
        <span>Javascript</span>
        <span>Node.js</span>
        <span>React</span>
        <span>Git</span>
        <span>Github</span>
      </SkillsBar>
    </Container>
  );
}
