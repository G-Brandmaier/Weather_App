import sun from 'C:/Users/gabbi/OneDrive/Skrivbord/Nackademin/Frontend2/Inlämningsuppgifter/Weather_App/weather-app/src/images/smileSun.gif';
import GetSearch from '../GetSearch/GetSearch.jsx';

const Home = ()=>{
    return(
        <>
            <header>
            <div className="headertext"> Weather2Day <img src={sun} alt="sun"/></div>
                <div className="searchtext">                        
                    <input type="text" placeholder="Sök och välj stad..."/>
                    <button className="searchBtn">Sök</button>
                </div>
            </header>
            <div className="homeDiv">
                <div className="weatherDiv">
                    <h1>Väder idag:</h1>
                    <GetSearch/>
                </div>
            </div>
        </>
    );
};

export default Home;