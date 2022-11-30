import './App.css';
import { Route, Routes } from "react-router-dom"
import About from './components/about/about';
import Home from './components/home/home';
import Work from './components/work/work';
import Social from './components/social/social';
import Nav from './components/nav/navbar';

function App() {
  return (
<>
  <Nav />
    <Routes>
      <Route path="/" component={Home} element={<Home/>}>Home</Route>
      <Route path="/About" component={About} element={<About/>}>About</Route>
      <Route path="/Work" component={Work} element={<Work/>}>Work</Route>
      <Route path="/Social" component={Social} element={<Social/>}>Social</Route>
    </Routes>
</>
  );
}

export default App;
