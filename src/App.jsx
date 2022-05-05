import "./App.css";
import data from "./data/data.json";

const filterAbteilung = (abt = "HR") => {
  return data
    .filter((m) => m.abteilung === abt)
    .map((m, index) => {
      return (
        <div key="index" className="person">
          <img src={m.picturesrc} alt={m.lastName} />
          <div className="name">
            {m.firstName} {m.lastName}{" "}
          </div>
          <div className="age">{m.age}</div>
        </div>
      );
    });
};

function App() {
  return (
    <div className="App">
      <h1>S Liebe Gmbh</h1>
      <h2>Employee List</h2>
      <h3>HR Abteilung</h3>
      <div className="abteilung">{filterAbteilung("HR")}</div>
      <h3>IT Abteilung</h3>
      <div className="abteilung">{filterAbteilung("IT")}</div>
      <h3>Einkauf Abteilung</h3>
      <div className="abteilung">{filterAbteilung("Einkauf")}</div>
    </div>
  );
}

export default App;
