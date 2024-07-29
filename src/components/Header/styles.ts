import styled from 'styled-components';
import LogoSvg from '../../assets/svg/logo.svg';

export const HeaderLayout = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  padding: 1rem 20rem;
  background-color: ${({ theme }) => theme.colors.navbarBackground};
`;

export const Logo = styled(LogoSvg)`
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
  font-weight: 700;
`;
