import { Route, Routes } from "react-router-dom";
import MainPage from '../views/containers/pages/main.js';

export const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<MainPage />} />
    </Routes>
  );
};