import { Link } from "react-router-dom"
import Card from "../Card"
import './All.scss'

const All = () => {

    return(
        <>
            <header className="header">
            <nav className="nav">
                <Link to="/">Начало</Link>
                <Link to="/learning">Уча</Link>
                <Link to="/exercises">Упражнения</Link>
				<Link to="/test-your-self">Пробвам</Link>
            </nav>
            </header>
            <div className="ta-table-container">
                {[...Array(10)].map((_, indexA) => {
                    return (
                        <div className="ta-row-numbers" key={indexA + 100}>
                            {[...Array(10)].map((_, indexB) => (
                                <Card key={indexB} num1={indexA + 1} num2={indexB + 1} className={indexA === indexB ? 'ta-power' : null} />
                            ))}
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default All
