import { useContext, useState } from "react"
import { postCommentToArticle } from "../api"
import { UserContext } from "../contexts/Users";

function PostComment({setAllComments, article_id}){
const [newComment, setNewComment] = useState('')
const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);

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
  const errorMessage = error.response.data.message || 'Something went wrong!';
  alert(errorMessage);
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
        />
        <button type="submit" disabled={isSubmitDisabled}>Add comment</button>
      </form>
        )
}

export default PostComment