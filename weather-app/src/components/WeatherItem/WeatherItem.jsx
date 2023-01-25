//Endast presentation väderdata
//{weather.City ? <p>{weather.City}</p> : null}
const WeatherItem = ({weather})=>{

    
    /*{city , country, currentStatus, currentStatusIcon, forecastDate, forecastMaxTemp,
        forecastMinTemp, forecastWind, forecastTotalPrecip, forecastChanceRain, forecastChanceSnow,
        forecastStatus, forecastStatusIcon, forecastUV, forecastSunrise, forecastSunset, forecastMoonrise, 
        forecastMoonset};*/

    return(
        <div className="weatherInfo">
            <p>{weather.city}, {weather.country} {weather.forecastDate}</p>
            <p> Temperature: Min <span className="biggertxt">{weather.forecastMinTemp}°C</span> Max <span className="biggertxt">{weather.forecastMaxTemp}°C</span></p> 
            <p>{weather.forecastStatus}</p><img src={weather.forecastStatusIcon} alt="" />           
        </div>
    );
};
export default WeatherItem;