function CommentCard({comment}) {

    const date = new Date(comment.created_at).toLocaleString("en-US")

return (
    <div className = "comment_card">
        <h3>{comment.author}</h3>
        <p>{comment.body}</p>
        <div className = "date_container">
        <p>Date: {date}</p>
        </div>
        <div className = "votes_container">
        <p>votes: {comment.votes}</p>
        </div>
    </div>
)
}



export default CommentCard;