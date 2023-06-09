import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleArticle } from "../api";
import AllComments from "./AllComments";
import VotingButton from "./VotingButton";

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
    <div className="individual_article_card">
        <h1 className="title">{singleArticle.title}</h1>
        <h4 className="author">Written by: {singleArticle.author}</h4>
        <img className = "article_image" src={singleArticle.article_img_url} alt={`article of ${singleArticle.title}`}></img>
       <h3>This article is about {singleArticle.topic}</h3>
        <p>{singleArticle.body}</p>
        <p>{date}</p>
        <VotingButton singleArticle = {singleArticle}/>
    </div>
    <AllComments/>
    </div>
)
}




export default IndividualArticle;