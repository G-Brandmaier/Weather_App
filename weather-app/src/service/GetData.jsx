const GetData = (search)=>{

    let url = "https://api.weatherapi.com/v1/forecast.json?key=aea4605b06e943e2818110603232201&q=" + search +"&days=1&aqi=no&alerts=no";
        
    fetch(url).then(response => response.json())
    .then(data => {return data});
};
export default GetData;