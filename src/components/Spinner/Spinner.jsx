import Spinner from "react-bootstrap/Spinner";
import "./Spinner.css";

function LoadingSpinner() {
  return (
    <Spinner animation="grow" role="status" className="spinner">
      <span>Loading ...</span>
    </Spinner>
  );
}

export default LoadingSpinner;
