import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Cookies from "js-cookie";
import Landing from "./pages/Landing";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Error from "./pages/Error";
import Services from "./pages/Services";
import Admin from "./pages/Admin";
import Login from "./pages/Login";

const ProtectedRoute = ({ children }) => {
  const isAdmin = Cookies.get("admin");
  return isAdmin ? children : <Navigate to="/login" replace />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/*" element={<Error />} />
        <Route path="/about" element={<About />} />
        <Route path="/client" element={<Clients />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
