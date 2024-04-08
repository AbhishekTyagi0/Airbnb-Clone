import "./App.css";
import CheckListing from "./Pages/CheckIn/CheckListing.tsx";
import Experiences from "./Pages/Experience/Experiences.tsx";
import Header from "./Pages/Header/Header.tsx";

function App() {
  return (
    <>
      <Header />
      <Experiences />
      <CheckListing />
    </>
  );
}

export default App;
