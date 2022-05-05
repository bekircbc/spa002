import "./App.css";
import data from "./data/data.json";

const filterAbteilung = (abt = "HR") => {
  return data.filter((m) => m.abteilung === abt);
};

function App() {
  return (
    <div className="App">
      <h1>HR Abteilung</h1>
      {filterAbteilung("HR").map((m, index) => {
        return (
          <div key="index" className="person">
            <img src={m.picturesrc} alt={m.lastName} />
            <div className="name">
              {m.firstName} {m.lastName}{" "}
            </div>
            <div className="age">{m.age}</div>
          </div>
        );
      })}
      <h1>IT Abteilung</h1>
      {filterAbteilung("IT").map((m, index) => {
        return (
          <div key="index" className="person">
            <img src={m.picturesrc} alt={m.lastName} />
            <div className="name">
              {m.firstName} {m.lastName}{" "}
            </div>
            <div className="age">{m.age}</div>
          </div>
        );
      })}
      <h1>Einkauf Abteilung</h1>
      {filterAbteilung("Einkauf").map((m, index) => {
        return (
          <div key="index" className="person">
            <img src={m.picturesrc} alt={m.lastName} />
            <div className="name">
              {m.firstName} {m.lastName}{" "}
            </div>
            <div className="age">{m.age}</div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
