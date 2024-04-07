import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignupFormDemo from "./pages/SignupFormDemo";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Routes>
        <Route path="/SignUp" element={<SignupFormDemo />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
