import './App.css';
import AllArticles from './Components/AllArticles';
import Header from './Components/Header';
import NavigationBar from './Components/NavigationBar';
import {Routes, Route} from "react-router-dom"
import IndividualArticle from './Components/IndividualArticle';
import AllComments from './Components/AllComments';
 
function App() {
  return (
    <div className="App">
       <Header/>
      <NavigationBar/>
    <Routes>
      <Route path="/" element = {<AllArticles/>} />
      <Route path="/articles/:article_id" element = {<IndividualArticle/>} />
      <Route path="/articles/:aritcle_id/comments" element = {<AllComments/>} />
    </Routes>
    </div>
  );
}

export default App;