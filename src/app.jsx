/* eslint-disable perfectionist/sort-imports */
import 'src/global.css';

import { useScrollToTop } from 'src/hooks/use-scroll-to-top';

import Router from 'src/routes/sections';
import ThemeProvider from 'src/theme';

import { DarkModeProvider } from './sections/gallery/context/DarkModeContext';

// ----------------------------------------------------------------------

export default function App() {

  useScrollToTop();

  return (
    <ThemeProvider >
       <DarkModeProvider>
      <Router  />
      </DarkModeProvider>
    </ThemeProvider>
  
  );
}
