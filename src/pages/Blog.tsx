import styled from 'styled-components';

const BlogSection = styled.section`
  max-width: 800px;
  margin: 4rem auto;
  padding: 2rem;
`;

const Title = styled.h2`
  font-family: var(--font-display);
  font-size: 2.2rem;
  font-weight: 700;
  color: #222;
  margin-bottom: 1.2rem;
`;

const Placeholder = styled.p`
  font-size: 1.2rem;
  color: #888;
`;

export default function Blog() {
  return (
    <BlogSection>
      <Title>Blog</Title>
      <Placeholder>Coming soon: Articles, tutorials, and insights.</Placeholder>
    </BlogSection>
  );
}
