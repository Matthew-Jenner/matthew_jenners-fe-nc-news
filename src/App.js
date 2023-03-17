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
    <div className='Header_login'>
       <Header/>
       <p> logged in as: {user.username} </p>
       <img className = "user_image" src={user.avatar_url} alt={`avatar of ${user.name}`}/>        
       </div>
      <NavigationBar/>
    <Routes>
      <Route path="/" element = {<AllArticles/>} />
      <Route path="/users" element = {<Users/>} />
      <Route path="/articles/:article_id" element = {<IndividualArticle/>} />
      <Route path="/articles/:aritcle_id/comments" element = {<AllComments/>} />
      <Route path='/topics/:topic' element={<AllArticles/>} />
   
    </Routes>
    </div>
  );
}

export default App;