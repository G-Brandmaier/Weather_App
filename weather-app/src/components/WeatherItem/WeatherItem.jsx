//Endast presentation väderdata
//{weather.City ? <p>{weather.City}</p> : null}
const WeatherItem = ({weather})=>{

    
    /*  let weather = {city , country, time, currentStatus, currentStatusIcon, currentTemp, forecastDate, forecastMaxTemp,
        forecastMinTemp, forecastWind, forecastTotalPrecip, forecastChanceRain, forecastChanceSnow,
        forecastStatus, forecastStatusIcon, forecastUV, forecastSunrise, forecastSunset, forecastMoonrise, 
        forecastMoonset};*/

    return(
        <div className="weatherInfo">
            <p>{weather.city}, {weather.country}</p>
            <p>Local time: {weather.time}</p>
            <p> Temperature: <span className="biggertxt">{weather.currentTemp}°C</span></p> 
            <p>{weather.currentStatus}</p><img src={weather.currentStatusIcon} alt="" />           
        </div>
    );
};
export default WeatherItem;