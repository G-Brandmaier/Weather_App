//{info.location.location ? <p>{info.location.location.country}</p> : null}
import { useState, useEffect } from "react";
import WeatherItem from "../components/WeatherItem/WeatherItem.jsx";
import Home from "../components/Home/Home.jsx";
import WeatherList from "../components/WeatherList/WeatherList.jsx";
import GetData from "../services/GetData.jsx";

const GetWeather = ()=>{
    const [weatherData, setWeatherData] = useState({});
    const [errorMessage, setErrorMessage] = useState("");
    const [weatherDataList, setWeatherDataList] = useState([]);

    useEffect(()=>{
        Search("Uppsala");
    },[]);

    const Search = async (search)=>{  
        setErrorMessage("");
        let info = await GetData(search);
  
        if(info === "Fel")
        {
            setErrorMessage("Nånting vart fel, försök igen")
        }
        let city = info.location.name;
        let country = info.location.country;
        let time = info.location.localtime;
    
        let currentStatus = info.current.condition.text;
        let currentStatusIcon = info.current.condition.icon;
        let currentTemp = info.current.temp_c;

        let weather = {city , country, time, currentStatus, currentStatusIcon, currentTemp};

        let weatherDays = [];

        for(let i = 0; i < 6; i++) 
        {
            let forecastDate = info.forecast.forecastday[i].date;
            let forecastMaxTemp = info.forecast.forecastday[i].day.maxtemp_c;
            let forecastMinTemp = info.forecast.forecastday[i].day.mintemp_c;
            let forecastTotalPrecip = info.forecast.forecastday[i].day.totalprecip_mm;
            let forecastStatus = info.forecast.forecastday[i].day.condition.text;
            let forecastStatusIcon = info.forecast.forecastday[i].day.condition.icon;
            let forecastSunrise = info.forecast.forecastday[i].astro.sunrise;
            let forecastSunset = info.forecast.forecastday[i].astro.sunset;

            weatherDays.push({forecastDate, forecastMaxTemp, forecastMinTemp, forecastTotalPrecip, 
            forecastStatus, forecastStatusIcon, forecastSunrise, forecastSunset});
            setWeatherDataList(weatherDays);
            setWeatherData(weather);
        }
    };

    return(
        <>
            <Home callback = {Search} error = {errorMessage}/>
            <div className="homeDiv">
                <WeatherItem weather = {weatherData}/>
                <WeatherList weatherList = {weatherDataList}/>
            </div>
        </>
    );

};

export default GetWeather;

/*
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

            let weather = {city , country, time, currentStatus, currentStatusIcon, currentTemp};

            let weatherDays = [];

            for(let i = 0; i < 6; i++) 
            {
                let forecastDate = info.forecast.forecastday[i].date;
                let forecastMaxTemp = info.forecast.forecastday[i].day.maxtemp_c;
                let forecastMinTemp = info.forecast.forecastday[i].day.mintemp_c;
                let forecastTotalPrecip = info.forecast.forecastday[i].day.totalprecip_mm;
                let forecastStatus = info.forecast.forecastday[i].day.condition.text;
                let forecastStatusIcon = info.forecast.forecastday[i].day.condition.icon;
                let forecastSunrise = info.forecast.forecastday[i].astro.sunrise;
                let forecastSunset = info.forecast.forecastday[i].astro.sunset;

                weatherDays.push({forecastDate, forecastMaxTemp, forecastMinTemp, forecastTotalPrecip, 
                forecastStatus, forecastStatusIcon, forecastSunrise, forecastSunset});
            };
            
            setWeatherDataList(weatherDays);
            setWeatherData(weather);
        }).catch(err => {
            setErrorMessage("Nånting vart fel, testa igen");
        });


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

            let weather = {city , country, time, currentStatus, currentStatusIcon, currentTemp};

            let weatherDays = [];

            for(let i = 0; i < 6; i++) 
            {
                let forecastDate = info.forecast.forecastday[i].date;
                let forecastMaxTemp = info.forecast.forecastday[i].day.maxtemp_c;
                let forecastMinTemp = info.forecast.forecastday[i].day.mintemp_c;
                let forecastTotalPrecip = info.forecast.forecastday[i].day.totalprecip_mm;
                let forecastStatus = info.forecast.forecastday[i].day.condition.text;
                let forecastStatusIcon = info.forecast.forecastday[i].day.condition.icon;
                let forecastSunrise = info.forecast.forecastday[i].astro.sunrise;
                let forecastSunset = info.forecast.forecastday[i].astro.sunset;

                weatherDays.push({forecastDate, forecastMaxTemp, forecastMinTemp, forecastTotalPrecip, 
                forecastStatus, forecastStatusIcon, forecastSunrise, forecastSunset});
            };
            
            setWeatherDataList(weatherDays);
            setWeatherData(weather);
        }).catch(err => {
            setErrorMessage("Nånting vart fel, testa igen");
        });
    
*/