import './App.css';
import AllArticles from './Components/AllArticles';
import Header from './Components/Header';
import NavigationBar from './Components/NavigationBar';
import {Routes, Route} from "react-router-dom"
 
function App() {
  return (
    <div className="App">
       <Header/>
      <NavigationBar/>
    <Routes>
      <Route path="/" element = {<AllArticles/>} />
    </Routes>
    </div>
  );
}

export default App;