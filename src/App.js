import './App.css';
import AllArticles from './Components/AllArticles';
import Header from './Components/Header';
import NavigationBar from './Components/NavigationBar';
import {Routes, Route} from "react-router-dom"
import IndividualArticle from './Components/IndividualArticle';
import AllComments from './Components/AllComments';
import Users from './Components/Users';
import { useContext } from 'react';
import { UserContext } from './contexts/Users';
 
function App() {
  const {user} = useContext(UserContext)

  return (
    <div className="App">
       <Header/>
       <p> logged in as: {user.username}</p>
      <NavigationBar/>
    <Routes>
      <Route path="/" element = {<AllArticles/>} />
      <Route path="/users" element = {<Users/>} />
      <Route path="/articles/:article_id" element = {<IndividualArticle/>} />
      <Route path="/articles/:aritcle_id/comments" element = {<AllComments/>} />
    </Routes>
    </div>
  );
}

export default App;