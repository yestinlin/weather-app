import "./Weather.css";
import { useState } from "react";
import SearchCity from "./SearchCity/SearchCity";
import WeatherResult from "./WeatherResult/WeatherResult";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/esm/Spinner";

const Weather = () => {
  const [weather, setWeather] = useState(undefined);

  const [loading, setLoading] = useState(false);

  const onSearch = (weatherData) => {
    setWeather(weatherData);
  };

  return (
    <>
      <Card className="text-center weather">
        <Card.Header>
          <h1>Weather App 🌤️</h1>
        </Card.Header>
        <Card.Body>
          <SearchCity search={onSearch} setLoading={setLoading} />
          {loading ? <Spinner /> : <WeatherResult weatherData={weather} />}
        </Card.Body>
        <Card.Footer className="text-muted">By Justin</Card.Footer>
      </Card>
    </>
  );
};

export default Weather;
