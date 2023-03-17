import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllComments } from "../api";
import CommentCard from "./CommentCard";
import PostComment from "./PostComment";

function AllComments () {
    const [allComments, setAllComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)
const {article_id} = useParams()

    useEffect(() => {
        setIsLoading(true)
        getAllComments(article_id).then((commentsFromApi) => {
            setAllComments(commentsFromApi)
            setIsLoading(false)
        })
    }, [article_id])
    
    return isLoading ? (
        <h1> Loading ....</h1>
    ) : (
        <div>
            <section>
            <PostComment setAllComments={setAllComments} article_id={article_id}/>
                <h2> Here are the comments about this article! </h2>
                {allComments.map((comment) => {
                    return <CommentCard key = {comment.comment_id} comment = {comment} />
                })}
            </section>
        </div>
    )
}



export default AllComments;