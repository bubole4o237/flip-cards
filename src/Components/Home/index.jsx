import { Link } from "react-router-dom"
import './Home.scss'

const Home = () => {
	return(
		<>
			<header className="header">
				<nav className="nav">
					<Link to="/all">Таблицата</Link>
					<Link to="/learning">Уча</Link>
					<Link to="/exercises">Упражнения</Link>
					<Link to="/test-your-self">Пробвам</Link>
				</nav>
			</header>
			<main className="main">
				<h1>Натали</h1>
			</main>
  		</>
	)
}

export default Home
