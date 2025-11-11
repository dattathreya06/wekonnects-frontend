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
import HomeCategories from "./pages/HomeBusinessCategories";
import BusinessDetails from "./pages/BusinessDetails";

/* === Admin Layout + Pages === */
import DashboardLayout from "./components/layout/DashboardLayout";
import DashboardPage from "./pages/AdminDashboard";
import EducationInfo from "./pages/AdminDashboard/EducationInfo";
import ApplyJobsList from "./pages/AdminDashboard/ApplyJobList";
import CreateProfile from "./pages/AdminDashboard/CreateProfile";
import PostJob from "./pages/AdminDashboard/PostJob";

function Layout() {
  const location = useLocation();

  // hide header/footer on all admin routes (anything starting with /admin)
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Header />}

      <main
        className="container"
        style={{
          padding: isAdminRoute ? "0" : "32px 0",
          minHeight: "80vh",
        }}
      >
        <Routes>
          {/* ====== PUBLIC PAGES ====== */}
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
          <Route path="/home" element={<Home />} />
          <Route path="/businesscategories" element={<HomeCategories />} />
          <Route path="/business-details" element={<BusinessDetails />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />

          {/* ====== ADMIN PAGES (nested inside DashboardLayout) ====== */}
          <Route path="/admin" element={<DashboardLayout />}>
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="jobs/education" element={<EducationInfo />} />
            <Route path="jobs/apply-list" element={<ApplyJobsList />} />
            <Route path="jobs/profile" element={<CreateProfile />} />
            <Route path="jobs/post" element={<PostJob />} />
          </Route>
        </Routes>
      </main>

      {!isAdminRoute && <Footer />}
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
