const API_KEY = "THE_KEY";

const WEATHER_URL = "http://api.weatherapi.com/v1/forecast.json?";

export const fetchWeatherCity = async (city, aqi) => {
  const url = new URL(WEATHER_URL);

  url.searchParams.append("key", API_KEY);
  url.searchParams.append("q", city);
  url.searchParams.append("aqi", aqi ? "yes" : "no");
  url.searchParams.append("days", 3);

  // fetch(url)
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));

  const response = await fetch(url);
  const data = await response.json();

  if (data.error) {
    throw new Error(data.error.message);
  }

  return data;
};
