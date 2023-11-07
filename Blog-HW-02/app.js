const urlSocialLinks = './data/socialLinks.json';
const urlPosts = './data/blog.json';
const urlNews = './data/news.json';
// const options = {
//     method: 'GET'
// }

function App () {
        return (
            <div className="main-content">
                <h1 className="main-title"></h1>
                <Header />
                <Main />
            </div>
        )

}
function Header () {
        const [searchResults, setSearchResults] = React.useState([]);    
        React.useEffect(()=> {
            getSocialList();
        }, []);  

        const getSocialList = () => {
            fetch(urlSocialLinks)
            .then(res => res.json())
            .then(res => {
                res ? setSearchResults(res) : setSearchResults([])
            })
            .catch(err => console.error(err))
        }

        let list;
        if(searchResults.length) {
            list = searchResults.map((item, index) => {
                return (<SocialLinks item={item} key={index}/>)
            })
        }

        return (
            <div className="header">
                <div className="container">
                    <nav className="main_nav">
                        <div className="logo-wrapper">
                            <a href="#" className="logo_link">
                                <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=482,fit=crop,q=95/mp8X1bjpqQi4Jb4b/logo-mjEP3GBGkwsyjj33.png" alt="" className="logo"/>
                            </a>
                        </div>
                        <h2 className="section-title">Health life</h2>
                        <div className="social-links-wrapper">
                            <ul className="social-link-list">
                                {list}
                            </ul>
                        </div>
                    </nav>       
                </div>
            </div> 
        )
}
function SocialLinks (props) {
        const { hrefLink, ariaLabel, linkIcon } = props.item;
        // const keyId = props.key;
        return (
            <li className="social-link-item">
                <a href={hrefLink} aria-label={ariaLabel} className="social-link" target="_blank" rel="noopener noreferrer">
                <i className={`${linkIcon} icon-social-link`}></i>
                </a>
            </li>
        )
}

function Main () {

        return (
            <main className="main">
                <Hero />
                <BlogSection />
            </main> 
        )
}

function Hero () {
        return (
            <section className="hero">
                <div className="container">
                    <h2 className="section-title">healthy eating made easy</h2>
                </div>
            </section> 
        )
}

function BlogSection () {

        return(
            <div className="blog-section">
            <Blog />
            <News />
            </div>
        )
}

function Blog () {
    const [searchBlogResults, setSearchBlogResults] = React.useState([]);      
    React.useEffect(()=> {
        getBlogList();
    }, []); 
    const getBlogList = () => {
        fetch('./data/blog.json')
        .then(res => res.json())
        .then(res => {
            res ? setSearchBlogResults(res) : setSearchBlogResults([])
        })
        .catch(err => console.error(err))
    }

    let blogList;
    if(searchBlogResults.length) {
        blogList = searchBlogResults.map((item, index) => {
            return <BlogItem key={index} item={item}/>
        })
    }
    return (
            <div className="blog">
                <h2 className="section-title">Blog</h2>
                <ul className="blog-list">
                  {blogList}  
                </ul>
                
            </div>    
        )
} 
function News () {
    const [searchNewsResults, setSearchNewsResults] = React.useState([]);   
    React.useEffect(()=> {
        getNewsList();
    }, []); 

    const getNewsList = () => {
       fetch(urlNews)
        .then(res => res.json())
        .then(res => {
            res ? setSearchNewsResults(res) : setSearchNewsResults([])
        })
        .catch(err => console.error(err));
 
    }
    
    let newsList;
    if(searchNewsResults.length) {
        newsList = searchNewsResults.map((item, index) => {
            return <NewsItem key={index} item={item}/>
        })
    }
        return (
            <div className="news">
                <h2 className="section-title">News</h2>
                <ul className="news-list">
                    {newsList}
                </ul>
            </div>            
        )
}
function BlogItem (props) {
        const { title, blogItem } = props.item;
        // const key = props.key;
        return (
                <li className="blog-item">
                    <h3 className="blog_item-title">{title}</h3>
                    <p className="blog_item-description">{blogItem}</p>
                </li>             
        )
} 

function NewsItem (props) {
        const { newsitem, data, author} = props.item;
        // const key = props.key;
        return (
                <li className="news-item">
                    <p className="news_item-description">{newsitem}</p>
                    <p className="news_item-data">{data}</p>
                    <p className="news_item-author">{author}</p>
                </li>       
        )
} 

const app = document.getElementById('pageWrapper');
const root = ReactDOM.createRoot(app);
root.render(<React.StrictMode>{React.createElement(App)}</React.StrictMode>)







