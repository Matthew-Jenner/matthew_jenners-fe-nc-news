import { useContext, useState } from "react"
import { postCommentToArticle } from "../api"
import { UserContext } from "../contexts/Users";

function PostComment({setAllComments, article_id}){
const [newComment, setNewComment] = useState('')
const [placeholder, setPlaceholder] = useState("write a comment...");

const { user } = useContext(UserContext);
const [submitButton, setSubmitButton] = useState(true);

const handleSubmit = (event) => {
  console.log(user)
  event.preventDefault()
    if (!user){
      setSubmitButton(false);
      setNewComment("");
      setPlaceholder("Please log in to make a comment");
    } else if (newComment === '') {
      setPlaceholder("start typing to post a comment");
      setSubmitButton(true);
    } else {
      // const commentToPost = {
      //   text: newComment,
      //   author: user.username,
      // };
  postCommentToArticle(article_id, newComment, user).then((newCommentFromApi) => {
    console.log(newCommentFromApi)
    setAllComments((currentComments) => {
      return [newCommentFromApi, ...currentComments]
    })
    setNewComment('')
  })
.catch((error) => {
  console.log(error);
  const errorMessage = error.response.data.message || 'Something went wrong!';
  alert(errorMessage);
});
}
};
    return (
        <form className="add-comment" onSubmit={handleSubmit}>
        <label htmlFor="new-comment"/>
        <textarea
          id="new-comment"
          value={newComment}
          placeholder={placeholder}
          onChange={(event) => setNewComment(event.target.value)}
        />
        <button type="submit" disabled={!submitButton}>Add comment</button>
      </form>
        )
}

export default PostComment