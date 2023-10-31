const el = React.createElement;

class App extends React.Component {
    constructor(props) {
        super(props)
    }
    // clickHandler = (event) => {
    //     event.preventDefault();
    //     this.setState({ counter: this.state.counter + 1 })
    // }

    render() {
        return (
            <div>
                <Header />
                <Main />
                <Footer />
            </div>
        )
    }
}
class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
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
}
class Main extends React.Component {
    constructor(props){
        super(props),
        this.state = {
            forecast: [ 
                {itemWidth: 'w-50', capital: 'lisbon', temperature:21, wiIcon: 'wi-day-sunny', id: 1},
                {itemWidth: 'w-25', capital:'paris', temperature: 11, wiIcon: 'wi-night-sleet', id: 2},
                {itemWidth: 'w-25', capital: 'belgrad', temperature: 15, wiIcon: 'wi-day-cloudy', id: 3},
                {itemWidth: 'w-25', capital: 'venice', temperature: 21, wiIcon: 'wi-day-cloudy-high', id: 4},
                {itemWidth: 'w-25', capital: 'tel-aviv', temperature: 32, wiIcon: 'wi-hot', id: 5},
                {itemWidth: 'w-25', capital: 'cair', temperature: 21, wiIcon: 'wi-day-sunny', id: 6},
                {itemWidth: 'w-25', capital: 'new-york', temperature: 17, wiIcon: 'wi-day-sleet-storm', id: 7},
                {itemWidth: 'w-25', capital: 'new-delhi', temperature: 17, wiIcon: 'wi-rain-wind', id: 8},
                {itemWidth: 'w-50', capital: 'san-francisco', temperature: 15, wiIcon: 'wi-day-cloudy', id: 9},
                {itemWidth: 'w-25', capital: 'tokio', temperature: 8, wiIcon: 'wi-day-sunny', id: 10},
                {itemWidth: 'w-100', capital: 'sydney', temperature: 25, wiIcon: 'wi-night-cloudy', id: 11}
                ]
        }
    }
    render() {
        const { forecast } = this.state;
        return (
            <main className="main">
                <div className="forecast">
                    <div className="container">
                        <ul className="forecsat_list">
                            {forecast.map(({ itemWidth, capital, temperature, wiIcon, id }) => {
                               return  <ForecastItems width={itemWidth} city={capital} temp={temperature} icon={wiIcon} key={id}/>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </main>
        )
    }
}
class ForecastItems extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        const { width, city, temp, icon, keyId } = this.props;
        return(
            <li key={keyId} className={`forecast_item ${width}`} >
                <p className="forecast_item-capital">{city}</p>
                <p className="forecast_item-temperature">{temp}°C<i className={`wi ${icon}`}></i></p>
            </li>
        )
    }
}
class Footer extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <footer className="footer">
                <div className="container">
                <p className="footer_text">Have a nice day and don't forget umbrella if you are in New Delhi now!</p>
                </div>
            </footer>             
        )
    }
} 


const app = document.getElementById('pageWrapper');
const root = ReactDOM.createRoot(app);
root.render(React.createElement(App))







