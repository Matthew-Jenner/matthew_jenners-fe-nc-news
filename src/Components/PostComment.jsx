import { useState } from "react"
import { postCommentToArticle } from "../api"

function PostComment({setAllComments, article_id}){
const [newComment, setNewComment] = useState('')

const handleSubmit = (event) => {
  event.preventDefault()
  postCommentToArticle(article_id, newComment).then((newCommentFromApi) => {
    setAllComments((currentComments) => {
      return [newCommentFromApi, ...currentComments]
    })
  })
  setNewComment('')
}
    return (
        <form className="add-comment" onSubmit={handleSubmit}>
        <label htmlFor="new-comment"/>
        <textarea
          id="new-comment"
          value={newComment}
          placeholder="Add a comment here ..."
          onChange={(event) => setNewComment(event.target.value)}
        />
        <button type="submit">Add comment</button>
      </form>
        )
}

export default PostComment