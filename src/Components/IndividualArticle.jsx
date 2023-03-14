import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleArticle } from "../api";

function IndividualArticle() {
const {article_id} = useParams()
const [singleArticle, setSingleArticle]=useState({})
const[isLoading, setIsLoading] = useState([true])


    useEffect(() => {
        setIsLoading(true)
        getSingleArticle(article_id).then((oneArticleApi) => {
            setSingleArticle(oneArticleApi)
            setIsLoading(false)
        })
    }, [article_id])

const date = new Date(singleArticle.created_at).toLocaleString("en-US")


return isLoading ? (
    <h1> Loading ....</h1>
    ) : (
    <div>
        <h1>{singleArticle.title}</h1>
        <h2>Written by: {singleArticle.author}</h2>
        <img className = "article_image" src={singleArticle.article_img_url} alt={`article of ${singleArticle.title}`}></img>
       <p>This article is about {singleArticle.topic}</p>
        <p>{singleArticle.body}</p>
        <p>{date}</p>
        <h3>votes:{singleArticle.votes}</h3>
    </div>
)
}




export default IndividualArticle;