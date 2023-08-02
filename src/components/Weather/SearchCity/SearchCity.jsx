import { fetchWeatherCity } from "../../../services/WeatherService";
import "./SearchCity.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

const SearchCity = (props) => {
  const [city, setCity] = useState("");
  const [aqi, setAqi] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [error, setError] = useState("");

  const onCityInputChangeHandler = (event) => {
    event.preventDefault();
    const value = event.target.value;
    setError("");
    if (value.length > 1) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
    setCity(value);
  };

  const onClicked = (event) => {
    const isChecked = event.target.checked;

    setAqi(isChecked);
  };

  const onSearchCity = async (event) => {
    if (!city) {
      return;
    }
    try {
      props.setLoading(true);
      event.preventDefault();
      const weatherData = await fetchWeatherCity(city, aqi);

      props.search(weatherData);
    } catch (error) {
      setError(error);
    } finally {
      props.setLoading(false);
    }
  };

  return (
    <>
      <Form onSubmit={onSearchCity}>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="text"
            value={city}
            onChange={onCityInputChangeHandler}
            placeholder="Search a city"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Show Air Quality"
            className="aqi"
            defaultChecked={aqi}
            value={aqi}
            onChange={onClicked}
          />
        </Form.Group>
        {error && (
          <Alert variant="danger">
            No matching result. Please try a different city.
          </Alert>
        )}
        <Button
          variant="primary"
          disabled={!isFormValid}
          type="submit"
          className="search_btn"
        >
          Search
        </Button>
      </Form>
    </>
  );
};

export default SearchCity;
