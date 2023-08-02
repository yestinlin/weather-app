import "./AirQualityResult.css";

const toFixedDigits = (value) => {
  return Number.parseFloat(value).toFixed(2);
};

const AirQualityResult = (props) => {
  return (
    <div>
      {props.airQuality ? (
        <ul>
          <li>
            <h5>Air Quality:</h5>
          </li>
          <li>co: {toFixedDigits(props.airQuality?.co)}</li>
          <li>no2: {toFixedDigits(props.airQuality?.no2)}</li>
          <li>pm2.5: {toFixedDigits(props.airQuality?.pm2_5)}</li>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

export default AirQualityResult;
