import "./App.css";

function App() {
  console.log(process.env);
  console.log(process.env.NODE_ENV);

  return (
    <div className="App">
      <p>current ENV = {process.env.NODE_ENV}</p>
      Current Env is{" "}
      {process.env.NODE_ENV === "development" ? "development" : "production"} so
      we are using:{" "}
      {process.env.NODE_ENV === "development"
        ? process.env.REACT_APP_API_KEY
        : process.env.REACT_APP_OTHER_API_KEY}
    </div>
  );
}

export default App;
