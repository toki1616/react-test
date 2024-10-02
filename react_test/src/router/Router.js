import { Route, Routes } from "react-router-dom";
import MainPage from '../containers/pages/main.js';

export const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<MainPage />} />
    </Routes>
  );
};