import { Routes, Route } from 'react-router-dom';
import { Header } from './components';
import {
  CodingEnvPage,
  FillInTheBlanksPage,
  HomePage,
  HowToPage1,
  HowToPage2,
  LogInPage,
  SelectPage,
  SignUpPage,
} from './pages';
import { DataProvider } from './contexts';
import "./App.css"
import './App.css';

const App = () => {
  return (
    <>
      <DataProvider>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<HomePage />} />
            <Route path="/login" element={<LogInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/games">
              <Route index element={<SelectPage />} />
              <Route
                path="how-to-play/fill-in-the-blanks"
                element={<HowToPage1 />}
              />
              <Route path="how-to-play/coding-env" element={<HowToPage2 />} />
              <Route path="game1" element={<FillInTheBlanksPage />} />
              <Route path="game2" element={<CodingEnvPage />} />
            </Route>
          </Route>
        </Routes>
      </DataProvider>
    </>
  );
};
export default App;
