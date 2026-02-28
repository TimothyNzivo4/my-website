import styled from 'styled-components';
import { motion } from 'framer-motion';
import imgA from '../assets/images/projects/Posive - POS Website UI Kit.jpg';
import imgB from '../assets/images/projects/Professional E-commerce Product Banner Design with Adobe Photoshop CC.jpg';
import imgC from '../assets/images/projects/Web Banner Design - Talha Hussain Qureshi.jpg';

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

const ProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 70vh;
  padding: 4rem 3rem 2rem 3rem;
  box-sizing: border-box;
`;

const ProjectsText = styled.div`
  max-width: 700px;
  width: 100%;
  text-align: center;
  margin-bottom: 2.5rem;
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

const Description = styled(motion.p)`
  font-size: 1.15rem;
  color: #bfc8d6;
  margin-bottom: 2.5rem;
`;

const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
`;

const ProjectCard = styled(motion.div)`
  background: #1d2533;
  border-radius: 12px;
  padding: 1.2rem 1.8rem;
  color: #fff;
  font-size: 1.1rem;
  box-shadow: 0 2px 8px rgba(255,92,58,0.08);
  display: flex;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  max-width: 600px;
`;

const ProjectImage = styled.img`
  width: 180px;
  height: 140px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(255,92,58,0.12);
`;

const projects = [
  {
    title: 'POS Website UI Kit',
    desc: 'A modern POS website UI kit with clean layouts and responsive design.',
    image: imgA,
    link: '#',
  },
  {
    title: 'E-commerce Product Banner',
    desc: 'Professional e-commerce product banner design created with Adobe Photoshop CC.',
    image: imgB,
    link: '#',
  },
  {
    title: 'Web Banner Design',
    desc: 'Creative web banner design for digital marketing and branding.',
    image: imgC,
    link: '#',
  },
];

export default function Projects() {
  return (
    <Container>
      <Nav>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/projects">Projects</NavLink>
        <NavLink href="/contact">Contacts</NavLink>
      </Nav>
      <ProjectsSection>
        <ProjectsText>
          <Title initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>Projects</Title>
          <Subtitle initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }}>Featured Work & Case Studies</Subtitle>
          <Description initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.1 }}>
            Explore a selection of Timothy's best work, including modern portfolio sites, creative landing pages, and reusable UI component libraries. Each project demonstrates a commitment to design excellence, performance, and user experience.
          </Description>
          <ProjectList>
            {projects.map((project, idx) => (
              <ProjectCard key={idx} initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 + idx * 0.2 }}>
                <ProjectImage src={project.image} alt={project.title} style={{ marginRight: '1.5rem' }} />
                <div>
                  <strong style={{ fontSize: '1.15rem' }}>{project.title}</strong>
                  <div style={{ margin: '0.5rem 0 0.7rem 0', color: '#bfc8d6' }}>{project.desc}</div>
                  <a href={project.link} style={{ color: '#ff5c3a', textDecoration: 'underline', fontWeight: 500 }}>View Project</a>
                </div>
              </ProjectCard>
            ))}
          </ProjectList>
        </ProjectsText>
      </ProjectsSection>
    </Container>
  );
}
