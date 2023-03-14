function ArticleCard({article}) {

    return (
        <div className="article_card">
            <img className = "article_image" src={article.article_img_url} alt={`article of ${article.title}`}></img>
            <div className = "article_container">
            <h2>{article.title}</h2>
            </div>
        </div>
    )
}

export default ArticleCard