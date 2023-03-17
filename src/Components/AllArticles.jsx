import { useEffect, useState } from "react"
import { getAllArticles } from "../api"
import ArticleCard from "./ArticleCard"

function AllArticles(){
const [allArticles, setAllArticles] = useState([])
const[isLoading, setIsLoading] = useState(true)

useEffect(() => {
    setIsLoading(true)
    getAllArticles().then((articlesFromAPi) => {
setAllArticles(articlesFromAPi)
setIsLoading(false)
    })
}, [])

return isLoading ? (
    <h1> Loading....</h1>
) : (

    <div>
    <section>
    <h2> Here are all of the articles:</h2>
     {allArticles.map((article) => {
            return  <ArticleCard key = {article.article_id} article={article} />
        })}
        </section>
    </div>
)
}
export default AllArticles