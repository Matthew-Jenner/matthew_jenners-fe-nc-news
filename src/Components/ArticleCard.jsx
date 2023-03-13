function ArticleCard({article}) {

    return (
        <li className="article_card">
            <h2>{article.title}</h2>
            <img src={article.article_img_url} alt={`article of ${article.title}`}></img>
        </li>
    )
}

export default ArticleCard