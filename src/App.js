import './App.css';
import FullFun from './Full';

function App() {
  return (
    <>
      <nav>
        <h1>Resume Maker - Made with <span style={{ color: "red" }}>&#10084;</span> by <a id="GitLink" href="https://pranay.wethinc.in/">R Pranay Kumar
          Reddy</a></h1>
      </nav>
      <div className="App">
        <FullFun />
      </div>
    </>
  );
}

export default App;
