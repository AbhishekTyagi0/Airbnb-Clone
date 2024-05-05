import "./App.css";
import Categories from "./Pages/Categories.tsx";
import CheckListing from "./Pages/CheckIn/CheckListing.tsx";
import Experiences from "./Pages/Experience/Experiences.tsx";
import Footer from "./Pages/Footer.tsx";
import Header from "./Pages/Header/Header.tsx";

function App() {
  return (
    <>
      <Header />
      <Experiences />
      <CheckListing />
      <Categories />
      <Footer />
    </>
  );
}

export default App;
