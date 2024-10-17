import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import User from "./components/User";
import Home from './components/Home'
import Header from './components/Header'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
        <Route index path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="user" element={<User />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
