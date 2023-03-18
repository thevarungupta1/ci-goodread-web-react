import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddReviewPage from "./pages/AddReviewPage";
import BookDetailPage from "./pages/BookDetailPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/books/detail/:id" element={<BookDetailPage />} />
        <Route path="/books/:id/review" element={ <AddReviewPage /> } />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
