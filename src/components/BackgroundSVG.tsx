import styled from 'styled-components';

const SVGBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  pointer-events: none;
  background: none;
`;

export default function BackgroundSVG() {
  return (
    <SVGBackground>
      <svg width="100%" height="100%" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', top: 0, left: 0 }}>
        <defs>
          <linearGradient id="bg-gradient" x1="0" y1="0" x2="1440" y2="900" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fffbe6" />
            <stop offset="1" stopColor="#ffd700" />
          </linearGradient>
        </defs>
        <ellipse cx="720" cy="450" rx="700" ry="400" fill="url(#bg-gradient)" opacity="0.18" />
        <ellipse cx="400" cy="200" rx="180" ry="80" fill="#ffd700" opacity="0.08" />
        <ellipse cx="1200" cy="700" rx="220" ry="120" fill="#ffd700" opacity="0.08" />
      </svg>
    </SVGBackground>
  );
}
