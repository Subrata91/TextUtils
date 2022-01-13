import "./App.css";
import About from "./components/About.js";
import Navbar from "./components/Navbar.js";
// import TextForm from "./components/TextForm.js";


function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <div className="container my-5">
        {/* <TextForm heading="Enter your comment here:" /> */}
        <About/>
      </div>
    </>
  );
}

export default App;
