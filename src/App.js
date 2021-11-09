
import Timer from "./components/Timer";
function App() {
  
  // handleWhichValue : switch case which to render to correct value to timer
  // check value of which then switch background color
  return (
    <div className="App">
      <Timer Minutes = {1} />
    </div>
  );
}

export default App;
