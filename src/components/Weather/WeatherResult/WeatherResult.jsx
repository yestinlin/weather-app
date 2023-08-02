import AirQualityResult from "./AirQualityResult/AirQualityResult";
import "./WeatherResult.css";
import Carousel from "react-bootstrap/Carousel";

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

//Forecast 3 days weather

const WeatherResult = (props) => {
  const location = props.weatherData?.location;

  const weather = props.weatherData?.current;

  // const dataTime = new Date(location?.localtime);

  const airQuality = weather?.air_quality;
  const forecastDays = props.weatherData?.forecast;
  let forecastday;
  if (forecastDays) {
    forecastday = forecastDays.forecastday;
  }
  console.log(forecastday);
  if (!location || !weather) {
    return <div></div>; // Return null or a loading indicator
  }

  return (
    <div className="weather-result">
      {/* <h1>{` ${location.name},${location.country} `}</h1>
      <h6>{dataTime.toLocaleDateString("en-AU", options)}</h6>
      <ul>
        <li>
          <img src={weather.condition.icon} alt="weather condition icon" />
        </li>
        <li>{weather.condition.text}</li>
        <li>
          <p>{weather.temp_c}°C</p>
        </li>
        <li>{weather.wind_kph} KM/H</li>
        <br />
      </ul>
      <AirQualityResult airQuality={airQuality} /> */}
      {/* <p>{JSON.stringify(props.weatherData)}</p> */}

      <Carousel data-bs-theme="dark" className="carousel">
        {forecastday &&
          forecastday.map((forecast) => (
            <Carousel.Item>
              <div key={forecast.date}>
                <h1>{` ${location.name},${location.country} `}</h1>
                <h6>
                  {new Date(forecast.date).toLocaleDateString("en-AU", options)}
                </h6>

                <ul>
                  <li>
                    <img
                      src={forecast.day.condition.icon}
                      alt="weather condition icon"
                    />
                  </li>
                  <li>{forecast.day.condition.text}</li>
                  <li>
                    <p>{forecast.day.maxtemp_c}°C</p>
                  </li>
                  <li>{forecast.day.maxwind_kph} KM/H</li>
                  <br />
                </ul>
                <AirQualityResult airQuality={forecast.day.air_quality} />
              </div>
            </Carousel.Item>
          ))}
      </Carousel>
    </div>
  );
};

export default WeatherResult;
