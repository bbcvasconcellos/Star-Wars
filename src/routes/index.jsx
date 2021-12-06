import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { QuestionAnswers } from "../pages/QuestionAnswers";
import { Movies } from "../pages/Movies";

export const RoutesDirection = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filmes" element={<Movies />} />
        <Route path="/questoes" element={<QuestionAnswers />} />
      </Routes>
    </BrowserRouter>
  )
}