import './App.css';
import { Route, Routes } from "react-router-dom"
import Home from './components/home/home';
import Work from './components/work/work';
import Social from './components/social/social';
import Nav from './components/nav/navbar';

function App() {
  return (
<>
<Nav />
  <Routes>
      <Route path="/Home" component={Home} element={<Home/>}>Home</Route>
      <Route path="/Work" component={Work} element={<Work/>}>Work</Route>
      <Route path="/Social" component={Social} element={<Social/>}>Social</Route>
    </Routes>
</>
  );
}

export default App;
