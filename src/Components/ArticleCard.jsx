import { Link } from "react-router-dom";


function ArticleCard({article}) {

    return (
        <div className="article_card">
        <Link to = {`/articles/${article.article_id}`}>
            <img className = "article_image" src={article.article_img_url} alt={`article of ${article.title}`}></img>
            <div className = "article_container">
            <h2>{article.title}</h2>
            </div>
            </Link>
        </div>
    )
}

export default ArticleCard;