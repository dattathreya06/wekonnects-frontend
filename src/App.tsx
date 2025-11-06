import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Events from "./components/Events";
import HomeSections from "./components/HomeSections";

export default function App() {
  return (
    <>
      <Header />
      <main className="container" style={{ padding: "32px 0", minHeight: "40vh" }}>
  
        <Hero/>
        <Services/>
        <Events/>
        <HomeSections/>
      </main>
      <Footer />
    </>
  );
}
