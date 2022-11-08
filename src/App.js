import { useEffect } from "react";
// import { getSalaryData } from "./api/getSalaryData";
import Container from "./components/container/Container";

function App() {
  // useEffect(() => {
  //   getSalaryData();
  // }, []);

  return (
    <div className="app">
      <Container />
    </div>
  );
}

export default App;
