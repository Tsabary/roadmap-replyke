import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AuthSuccessPage from "./pages/AuthSuccessPage";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth-success" element={<AuthSuccessPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;
