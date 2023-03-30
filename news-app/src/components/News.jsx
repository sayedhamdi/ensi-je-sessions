import '../styles/News.css';


export default function News({source,author,title,description,url,urlToImage,publishedAt,content}){

    return (

        <div classNameName="news" style={{width:'20%'}}>
            <div className="column">

    <div className="post-module">

      <div className="thumbnail">
        <div className="date">
          <div className="day">27</div>
          <div className="month">Mar</div>
        </div><img src={urlToImage}/>
      </div>

      <div className="post-content">
        <div className="category">Photos</div>
        <h1 className="title"> <a href={url}>{title}</a></h1>
        <h2 className="sub_title">{description}</h2>
        <p className="description">{content}</p>
        <div className="post-meta"><span className="timestamp"><i className="fa fa-clock-">{source}</i>
            published at  { publishedAt }</span><span className="comments"><i className="fa fa-comments"></i><a href="#">by <b>{author}</b></a></span></div>
      </div>
    </div>
  </div>

        </div>
    );
}