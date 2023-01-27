/*let weather = {city , country, time, currentStatus, currentStatusIcon, currentTemp,forecastDate, forecastMaxTemp,
    forecastMinTemp, forecastTotalPrecip, forecastStatus, forecastStatusIcon, forecastSunrise, forecastSunset};*/

const WeatherList = ({weatherList})=>{

    let list = weatherList.map(w =>{
        return(<div className="forecastCard">
        <p>{w.forecastDate}</p>
        <p>{w.forecastStatus}</p><img src={w.forecastStatusIcon} alt="" />
        <p>Min <span className="biggertxt">{w.forecastMinTemp}°C</span> Max <span className="biggertxt">{w.forecastMaxTemp}°C</span></p>
        <p>Expected rain/snow {w.forecastTotalPrecip}mm</p>
        <p>Sunrise &#9788; {w.forecastSunrise}</p>
        <p>Sunset &#9790; {w.forecastSunset}</p>
        </div>);
    })
    return(
        <>
            <div className="forecastDaysDivTxt">
                <h1>6 day forecast</h1>
            </div>
            <div className="forecastDaysDiv">
                {list}  
            </div>
        </>
    );
};
export default WeatherList;