function CommentCard({comment}) {

    const date = new Date(comment.created_at).toLocaleString("en-US")

return (
    <div>
        <h3>{comment.author}</h3>
        <p>{comment.body}</p>
        <p>Date: {date}</p>
        <p>votes: {comment.votes}</p>
    </div>
)
}



export default CommentCard;