import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      navbarBackground: stirng;
      modalBackground: string;
      loginInputBackground: string;
      loginInputText: string;
      btnPrimaryBackground: string;
      btnPrimaryText: string;
      btnPrimaryBorder: string;
      btnHoverBackground: string;
      btnHoverText: string;
      btnHoverBorder: string;
      btnDisabledBackground: string;
      btnDisabledText: string;
      toggleBorder: string;
      toggleSwitch: string;
      toggleEnabledBackground: string;
      toggleDisabledBackground: string;
      inputBackground: string;
      inputText: string;
      inputBorder: string;
      containerBackground: string;
      containerText: string;
      containerBorder: string;
      checkboxBackground: string;
      checkboxBorder: string;
      checkboxCheck: string;
    };
  }
}
