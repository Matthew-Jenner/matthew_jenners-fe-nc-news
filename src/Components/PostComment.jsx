import { useContext, useState } from "react"
import { postCommentToArticle } from "../api"
import { UserContext } from "../contexts/Users";

function PostComment({setAllComments, article_id}){
const [newComment, setNewComment] = useState('')
const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);
const [errorPost, setErrorPost] = useState(false);

const { user } = useContext(UserContext);

const handleSubmit = (event) => {
  event.preventDefault()
setIsSubmitDisabled(true)
  postCommentToArticle(article_id, newComment, user).then((newCommentFromApi) => {
    console.log(newCommentFromApi)
    setAllComments((currentComments) => {
      return [newCommentFromApi, ...currentComments]
    })
    setNewComment('')
    setIsSubmitDisabled(false)

  })
.catch((error) => {
  setErrorPost(true)
  setIsSubmitDisabled(false)
});
}

    return (
        <form className="add-comment" onSubmit={handleSubmit}>
        <label  htmlFor="new-comment"/>
        <textarea
          id="new-comment"
          value={newComment}
          placeholder={"logged in users can write a comment..."}
          onChange={(event) => setNewComment(event.target.value)}
          required/>
        <button type="submit" disabled={isSubmitDisabled}>Add comment</button>
        {errorPost && <p className="error-message">Unable to post comment, there is an error</p>}
      </form>
        )
}

export default PostComment