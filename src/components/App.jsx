import { Route, Routes } from "react-router-dom";
import AppBar from "./AppBar/AppBar";
import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

const App = () => {
  return (
    <div>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
