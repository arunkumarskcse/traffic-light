import "./App.css";
import TrafficLight from "./traffic-light";

const TrafficLights = [
  {
    color: "yellow",
    time: 3000, // 1sec
    order: 2,
    displayOrder: 2,
  },
  {
    color: "red",
    time: 10000, // 10sec
    order: 1,
    displayOrder: 1,
  },
  {
    color: "green",
    time: 10000, // 10sec
    order: 3,
    displayOrder: 3,
  }
];

function App() {
  return (
    <>
      <TrafficLight data={TrafficLights} />
    </>
  );
}

export default App;
