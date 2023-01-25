//{info.location.location ? <p>{info.location.location.country}</p> : null}
import { useState, useEffect } from "react";
import WeatherItem from "../WeatherItem/WeatherItem.jsx";
import Home from "../Home/Home.jsx";

//TODO:
/*
- forecastday[i] i är dagen för vädret, lägga in så jag kan få upp 6 dagar framåt med väder för vald stad
    kanske en ny komponent eller metod.
- kolla om jag kan få till platsigenkänning vid start
*/

const GetSearch = ()=>{
    const [weatherData, setWeatherData] = useState({});
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(()=>{
        Search("Uppsala");
    },[]);

    const Search = (search)=>{   
        setErrorMessage("");
        let url = "https://api.weatherapi.com/v1/forecast.json?key=aea4605b06e943e2818110603232201&q=" + search +"&days=6&aqi=no&alerts=no";
        
        fetch(url).then(response => response.json())
        .then(info => {
            let city = info.location.name;
            let country = info.location.country;
            let time = info.location.localtime;
        
            let currentStatus = info.current.condition.text;
            let currentStatusIcon = info.current.condition.icon;
            let currentTemp = info.current.temp_c;
        
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

            let weather = {city , country, time, currentStatus, currentStatusIcon, currentTemp,forecastDate, forecastMaxTemp,
            forecastMinTemp, forecastWind, forecastTotalPrecip, forecastChanceRain, forecastChanceSnow,
            forecastStatus, forecastStatusIcon, forecastUV, forecastSunrise, forecastSunset, forecastMoonrise, 
            forecastMoonset};

            setWeatherData(weather);
        }).catch(err => {
            setErrorMessage("Nånting vart fel, testa igen : )");
        });                  
    };

    return(
        <>
            <Home callback = {Search} error = {errorMessage}/>
            <div className="homeDiv">
                <div className="weatherDiv">
                    <WeatherItem weather = {weatherData}/>
                </div>
            </div>
        </>
    );

};

export default GetSearch;