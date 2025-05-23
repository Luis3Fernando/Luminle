import './App.css';
import { Routes, Route } from "react-router-dom";;
import Layout from "./layout/Layout";
import HomePage from './pages/home/HomePage';
import GamePage from './pages/game/GamePage';

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/game" element={<GamePage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
