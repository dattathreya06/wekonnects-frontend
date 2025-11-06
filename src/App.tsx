// src/App.tsx
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Events from "./components/Events";
import HomeSections from "./components/HomeSections";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Leadership from "./pages/LeadershipPage";
import Home from "./pages/HomePage";
import Contact from "./pages/ContactPage";

// Smart Layout Wrapper
function Layout() {
  const location = useLocation();
  const noHeaderPaths = ["/login", "/signup"];
  const hideHeader = noHeaderPaths.includes(location.pathname);

  return (
    <>
      {!hideHeader && <Header />}
      <main className="container" style={{ padding: hideHeader ? "0" : "32px 0", minHeight: "80vh" }}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Services />
                <Events />
                <HomeSections />
              </>
            }
          />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/home" element={<Home />}/>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
         
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}