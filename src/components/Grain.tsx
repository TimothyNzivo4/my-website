import styled from 'styled-components';

const GrainOverlay = styled.div`
  pointer-events: none;
  position: fixed;
  inset: 0;
  z-index: 9999;
  opacity: 0.08;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><filter id="grain"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4"/></filter><rect width="400" height="400" filter="url(%23grain)"/></svg>');
  background-size: cover;
`;

export default function Grain() {
  return <GrainOverlay />;
}
