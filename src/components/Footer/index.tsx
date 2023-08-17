import { FooterContainer } from './styles';
import { ThemeSwitcher } from '../ThemeSwitcher';

import logo from '../../assets/logo.png';

export const Footer = () => {
  return (
    <FooterContainer>
      <img src={logo} alt="Logo - Coffee Delivery" />
      <ThemeSwitcher />
    </FooterContainer>
  );
};
