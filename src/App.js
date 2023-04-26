import "./App.css";

function App() {
  console.log(process.env);
  console.log(process.env.NODE_ENV);

  return <div className="App">current ENV = {process.env.NODE_ENV}</div>;
}

export default App;
