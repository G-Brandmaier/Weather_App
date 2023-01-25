//Endast presentation väderdata
//{weather.City ? <p>{weather.City}</p> : null}
const WeatherItem = ({weather})=>{

    
    /*{city , country, currentStatus, currentStatusIcon, forecastDate, forecastMaxTemp,
        forecastMinTemp, forecastWind, forecastTotalPrecip, forecastChanceRain, forecastChanceSnow,
        forecastStatus, forecastStatusIcon, forecastUV, forecastSunrise, forecastSunset, forecastMoonrise, 
        forecastMoonset};*/

    return(
        <div className="weatherInfo">

            <p>{weather.city}, {weather.country}</p>
            <p>{weather.forecastStatus}</p><img src={weather.forecastStatusIcon} alt="" />
            <p>Temperatur- Min:{weather.forecastMinTemp} Max:{weather.forecastMaxTemp}</p>            
        </div>
    );
};
export default WeatherItem;