const el = React.createElement;

class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <h1 className="main-title"></h1>
                <Header />
                <Main />
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
                    <div className="logo-wrapper">
                        <a href="#" className="logo_link">
                            <img src="#" alt="" className="logo"/>
                        </a>
                    </div>

                    <h2 className="section-title">Blog name</h2>

                    <div className="social-links-wrapper">
                        <ul className="social-link-list">
                            <li className="social-link-item">
                                <a href="#" aria-label="" className="social-link" target="_blank" rel="noopener noreferrer">
                                </a>
                            </li>
                            <li className="social-link-item">
                                <a href="#" aria-label="" className="social-link" target="_blank" rel="noopener noreferrer">
                                </a>
                            </li>
                            <li class="social-link-item">
                                <a href="#" aria-label="" className="social-link" target="_blank" rel="noopener noreferrer">
                                </a>
                            </li>
                            <li class="social-link-item">
                                <a href="#" aria-label="" className="social-link" target="_blank" rel="noopener noreferrer">
                                </a>
                            </li>
                            <li class="social-link-item">
                                <a href="#" aria-label="" className="social-link" target="_blank" rel="noopener noreferrer">
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                
                </div>
            </header> 
        )
    }
}
class Main extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <main className="main">
                <Hero />
                <BlogSection />
            </main> 
        )
    }
}
class Hero extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <section className="hero">
                <div className="container">
                    <h2 className="section-title">Full-width banner image</h2>
                </div>
            </section> 
        )
    }
}
class BlogSection extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return(
            <div className="blog-section">
            <Blog />
            <News />
            </div>

        )
    }
}
class Blog extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="blog">
                <h2 className="section-title">Blog</h2>
                    <BlogItem />
            </div>    
        )
    }
} 
class News extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="news">
                <h2 className="section-title">News</h2>
                    <NewsItem />
            </div>
                       
        )
    }
}
class BlogItem extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <ul className="blog-list">
                <li key="1" className="blog-item">1</li>
                <li key="2" className="blog-item">2</li>
                <li key="3" className="blog-item">3</li>
                <li key="4" className="blog-item">4</li>
            </ul>
                       
        )
    }
} 
class NewsItem extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <ul className="news-list">
                <li key="6" className="news-item">1</li>
                <li key="7" className="news-item">2</li>
                <li key="8" className="news-item">3</li>
            </ul>
                       
        )
    }
} 

const app = document.getElementById('pageWrapper');
const root = ReactDOM.createRoot(app);
root.render(React.createElement(App))







