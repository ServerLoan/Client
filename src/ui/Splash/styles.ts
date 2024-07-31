import styled from 'styled-components';

export const SplashLayout = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Page = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Paragraph = styled.p`
  margin: auto 0;
  font-size: 2.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.highlightText};
`;

export const Image = styled.img`
  width: 100vw;
`;
