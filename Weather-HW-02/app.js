const URL = './data/forecast.json';
function App () {

        return (
            <div>
                <Header />
                <Main />
                <Footer />
            </div>
        )
}
function Header () {

        return (
            <header className="header">
                <div className="container">
                <nav className="main_nav">
                    <ul className="nav_list">
                    <li className="nav_item">
                        <a className="nav_link active" href="#">&#9664;</a>
                    </li>
                    </ul>
                </nav>
                <h1 className="main_title">CSS weather forecast</h1>
                <i className="wi wi-sunrise"></i>
                </div>
            </header> 
        )
}
function Main () {
    const [forecastResults, setForecastResults] = React.useState([]);   
    React.useEffect(()=> {
        getForecastList();
    }, []); 

    const getForecastList = () => {
       fetch(URL)
        .then(res => res.json())
        .then(res => {
            res ? setForecastResults(res) : setForecastResults([])
        })
        .catch(err => console.error(err));
 
    }
    
    let forecast;
    if(forecastResults.length) {
        forecast = forecastResults.map((item, index) => {
            return <ForecastItems key={index} item={item}/>
        })
    }
        return (
            <main className="main">
                <div className="forecast">
                    <div className="container">
                        <ul className="forecsat_list">
                            {forecast}
                        </ul>
                    </div>
                </div>
            </main>
        )
}
function ForecastItems (props) {
    const { itemWidth, capital, temperature, wiIcon } = props.item;
        return(
            <li className={`forecast_item ${itemWidth}`} >
                <p className="forecast_item-capital">{capital}</p>
                <p className="forecast_item-temperature">{temperature}°C
                    <i className={`wi ${wiIcon}`}></i>
                </p>
            </li>
        )
}
function Footer () {
        return (
            <footer className="footer">
                <div className="container">
                <p className="footer_text">Have a nice day and don't forget umbrella if you are in New Delhi now!</p>
                </div>
            </footer>             
        )
} 


const app = document.getElementById('pageWrapper');
const root = ReactDOM.createRoot(app);
root.render(<React.StrictMode>{React.createElement(App)}</React.StrictMode>)







