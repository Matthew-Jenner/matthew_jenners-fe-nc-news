import axios from "axios"

const newsApi = axios.create({
    baseURL: "https://matthew-j-hosting.onrender.com/api"
})

export const getAllArticles = () => {
    return newsApi.get("/articles").then(({data}) => {
        return data.articles
    })
    .catch((error) => {
        console.log("An error occurred while retrieving the articles:", error);
        throw error;
    });
}

export const getSingleArticle = (article_id) => {
    return newsApi.get(`/articles/${article_id}`).then(({data}) => {
return data.article    
})
}

export const getAllComments = (article_id) => {
    return newsApi.get(`/articles/${article_id}/comments`).then(({data}) => {
        return data.comments
    })
}

export const patchReviewVotes = (article_id, vote) => {
    return newsApi.patch(`/articles/${article_id}`, { inc_votes: vote })
      .then(({ data }) => {
        return data.article
      });
  };

  export const postCommentToArticle = (article_id, newComment) => {
    return newsApi.post(`/articles/${article_id}/comments`, {text: newComment
    }).then(({ data }) =>{
       return data.body
    });
  }; 