import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import News from './components/News'


//let url = (county)=>`https://newsapi.org/v2/top-headlines?country=${county}&apiKey=3fb07bcffb6f41ce80ac23e24cc87cde`
let url =  (country)=> 'http://localhost:8000/latest-news'
function App() {
  let [articles, setArticles] = useState([])
  let [ country,setCountry ] = useState('us')
  useEffect(()=>{
    // before the component loads
    fetchNews()
  }, [country])
  


  const fetchNews = ()=>{
    fetch(url(country))
    .then(res => res.json())
    .then(data => {
      console.log(data.articles)
      setArticles(data.articles)
    })
  }
  return (
    <div className="App">
      <Navbar />
      <div>
        <select onChange={(e)=>setCountry(e.target.value)}>
          <option value="us">United States</option>
          <option value="in">India</option>
          <option value="gb">United Kingdom</option>
          <option value="au">Australia</option>
          <option value="ca">Canada</option>
          <option value="cn">China</option>
          <option value="fr">France</option>
        </select>
      </div>
      <div style={{display:'flex',flexWrap:'wrap',gap:'60px',justifyContent:'center'}}>
        {articles.map((article) => (
          <News
            key={article.title}
            source={article.source.name}
            author={article.author}
            title={article.title}
            description={article.description}
            url={article.url}
            urlToImage={article.urlToImage}
            publishedAt={article.publishedAt}
            content={article.content}
          />
        ))
        }
      </div>
    </div>
  )
}

export default App
