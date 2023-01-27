const GetData = async (search)=>{
    let url = "https://api.weatherapi.com/v1/forecast.json?key=aea4605b06e943e2818110603232201&q=" + search +"&days=6&aqi=no&alerts=no";
    
    let response = await fetch(url);
   
    if(!response.ok)
    {
        return "Fel";
    }
    else
    {
        return(response.json());
    }
};
export default GetData;