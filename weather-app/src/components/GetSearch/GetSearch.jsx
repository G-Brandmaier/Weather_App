//{info.location.location ? <p>{info.location.location.country}</p> : null}
import { useState, useEffect } from "react";
import WeatherItem from "../WeatherItem/WeatherItem.jsx";
import Home from "../Home/Home.jsx";

const GetSearch = ()=>{
    const [weatherData, setWeatherData] = useState({});

    useEffect(()=>{
        Search("Uppsala");
    },[])
    const Search = (search)=>{   

        let url = "https://api.weatherapi.com/v1/forecast.json?key=aea4605b06e943e2818110603232201&q=" + search +"&days=1&aqi=no&alerts=no";
        
        fetch(url).then(response => response.json())
        .then(info => {
            let city = info.location.name;
            let country = info.location.country;
        
            let currentStatus = info.current.condition.text;
            let currentStatusIcon = info.current.condition.icon;
        
            let forecastDate = info.forecast.forecastday[0].date;
            let forecastMaxTemp = info.forecast.forecastday[0].day.maxtemp_c;
            let forecastMinTemp = info.forecast.forecastday[0].day.mintemp_c;
            let forecastWind = info.forecast.forecastday[0].day.maxwind_kph;
            let forecastTotalPrecip = info.forecast.forecastday[0].day.totalprecip_mm;
            let forecastChanceRain = info.forecast.forecastday[0].day.daily_chance_of_rain;
            let forecastChanceSnow = info.forecast.forecastday[0].day.daily_chance_of_snow;
            let forecastStatus = info.forecast.forecastday[0].day.condition.text;
            let forecastStatusIcon = info.forecast.forecastday[0].day.condition.icon;
            let forecastUV = info.forecast.forecastday[0].day.uv;
            let forecastSunrise = info.forecast.forecastday[0].astro.sunrise;
            let forecastSunset = info.forecast.forecastday[0].astro.sunset;
            let forecastMoonrise = info.forecast.forecastday[0].astro.moonrise;
            let forecastMoonset = info.forecast.forecastday[0].astro.moonset;

            let weather = {city , country, currentStatus, currentStatusIcon, forecastDate, forecastMaxTemp,
            forecastMinTemp, forecastWind, forecastTotalPrecip, forecastChanceRain, forecastChanceSnow,
            forecastStatus, forecastStatusIcon, forecastUV, forecastSunrise, forecastSunset, forecastMoonrise, 
            forecastMoonset};

            setWeatherData(weather);
        });                  
    };

    return(
        <>
            <Home callback = {Search}/>
            <div className="homeDiv">
                <div className="weatherDiv">
                    <h3>Väder idag:</h3>
                    <WeatherItem weather = {weatherData}/>
                </div>
            </div>
        </>
    );

};

export default GetSearch;