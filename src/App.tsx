import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { lightTheme } from './styles/theme';
import { Splash } from './ui/Splash';
import { RecoilProvider } from './services/recoilProvider';

function App() {
  return (
    <RecoilProvider>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Splash />} />
        </Routes>
      </ThemeProvider>
    </RecoilProvider>
  );
}

export default App;
