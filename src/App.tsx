import "./App.css";
import Experiences from "./Pages/Experience/Experiences.tsx";
import Header from "./Pages/Header/Header.tsx";

function App() {
  return (
    <>
      <Header />
      <Experiences />
      <h1 className="text-3xl flex justify-center items-center font-bold underline">
        Hello world!
      </h1>
    </>
  );
}

export default App;
