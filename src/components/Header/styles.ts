import styled from 'styled-components';

export const HeaderLayout = styled.header``;

export const Logo = styled.img`
  width: 20rem;
`;

export const ButtonRow = styled.div`
  display: flex;
  gap: 1.5rem;
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  background-color: ${({ theme }) => theme.colors.btnPrimaryBackground};
  border: 0.5rem solid ${({ theme }) => theme.colors.btnPrimaryBorder};
  color: ${({ theme }) => theme.colors.btnPrimaryText};
  &:hover {
    background-color: ${({ theme }) => theme.colors.btnHoverBackground};
    border-color: ${({ theme }) => theme.colors.btnHoverBorder};
    color: ${({ theme }) => theme.colors.btnHoverText};
  }
  font-size: 1.5rem;
`;
