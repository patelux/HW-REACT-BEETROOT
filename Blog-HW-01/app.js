const el = React.createElement;

class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="main-content">
                <h1 className="main-title"></h1>
                <Header />
                <Main />
            </div>
        )
    }
}
class Header extends React.Component {
    constructor(props) {
        super(props),
        this.state = {
            socialLinks: [ 
                {id: 11, hrefLink:"https://www.facebook.com", ariaLabel:"facebook", linkIcon:"fa-brands fa-facebook-f"},
                {id: 12, hrefLink:"https://twitter.com", ariaLabel:"twitter", linkIcon:"fa-brands fa-twitter"},
                {id: 14, hrefLink:"https://www.instagram.com", ariaLabel:"instagram", linkIcon:"fa-brands fa-instagram"},
                {id: 15, hrefLink:"https://www.facebook.com", ariaLabel:"facebook", linkIcon:"fa-brands fa-facebook-f"},
                {id: 16, hrefLink:"https://twitter.com", ariaLabel:"twitter", linkIcon:"fa-brands fa-twitter"}
                ]
        }
    }
    render() {
        const { socialLinks } = this.state;
        return (
            <div className="header">
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
                            {socialLinks.map(({ id, hrefLink, ariaLabel, linkIcon }) => {
                               return  <SocialLink keyId={id} hrefLink={hrefLink} ariaLabel={ariaLabel} icon={linkIcon}/>
                                })
                            }
                        </ul>
                    </div>
                </nav>
                
                </div>
            </div> 
        )
    }
}
class SocialLink extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        const { keyId, hrefLink, ariaLabel, icon } = this.props;
        return (
            <li key={keyId} className="social-link-item">
                <a href={hrefLink} aria-label={ariaLabel} className="social-link" target="_blank" rel="noopener noreferrer">
                <i className={`${icon} icon-social-link`}></i>
                </a>
            </li>
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







