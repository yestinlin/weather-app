import Weather from "./components/Weather/Weather";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <Container fluid="sm">
      <div className="App">
        <Weather />
      </div>
    </Container>
  );
}

export default App;
