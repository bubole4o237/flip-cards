// import Router from './Router/Router.jsx'
// import FlipCard from './Components/FlipCard/FlipCard'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { All, Exercises, Home, Learning, TestYourSelf } from './Components'
import './App.scss'

function App() {

  return (
	<Router>
		<div className="App">
			{/* <header className="header">
			<nav className="nav">
				<Link to="">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/contact">Contact</Link>
			</nav>
			</header> */}
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/all" element={<All />} />
					<Route path="/learning" element={<Learning />} />
					<Route path="/exercises" element={<Exercises />} />
					<Route path="/test-your-self" element={<TestYourSelf />} />
				</Routes>
			</main>
      	</div>
    </Router>
  )
}

export default App
