import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import About from "./pages/About";
import Blog from "./pages/Blog";
import ContactUs from "./pages/ContactUs";
import Fetch from "./pages/Fetch";
import Home from "./pages/Home";
import User from "./pages/User";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/comingsoon" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/github" element={<User />} />
        <Route path="/contact" element={<ContactUs />} />

        <Route path="/fetch" element={<Fetch />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
