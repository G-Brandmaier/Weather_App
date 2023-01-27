import { useRef } from 'react';
import sun from 'C:/Users/gabbi/OneDrive/Skrivbord/Nackademin/Frontend2/Inlämningsuppgifter/Weather_App/weather-app/src/images/smileSun.gif';

const Home = ({callback, error})=>{
    let searchTxt = useRef();

    return(
        <>
            <header>
            <div className="headertext"> Weather2Day <img src={sun} alt="sun"/></div>
                <div className="searchtext">                        
                    <input type="text" placeholder="Type in a city..." ref={searchTxt}/>
                    <button className="searchBtn" onClick={()=>callback(searchTxt.current.value)}>Search</button>
                    <div className="error"><p>{error}</p></div>
                </div>
            </header>
        </>
    );
};

export default Home;