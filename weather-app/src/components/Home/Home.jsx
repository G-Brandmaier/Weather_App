import { useRef } from 'react';
import sun from 'C:/Users/gabbi/OneDrive/Skrivbord/Nackademin/Frontend2/Inlämningsuppgifter/Weather_App/weather-app/src/images/smileSun.gif';

const Home = ({callback})=>{
    let searchTxt = useRef();

    return(
        <>
            <header>
            <div className="headertext"> Weather2Day <img src={sun} alt="sun"/></div>
                <div className="searchtext">                        
                    <input type="text" placeholder="Sök och välj stad..." ref={searchTxt}/>
                    <button className="searchBtn" onClick={()=>callback(searchTxt.current.value)}>Sök</button>
                </div>
            </header>
        </>
    );
};

export default Home;