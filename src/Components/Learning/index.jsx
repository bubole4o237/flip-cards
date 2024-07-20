import { Link } from "react-router-dom"
import './Learning.scss'
import Card from "../Card"
import { useState } from "react"

const Learning = () => {
    const [numberInput, setNumberInput] = useState(1)

    return( 
        <>
            <header className="header">
                <nav className="nav">
                    <Link to="/">Начало</Link>
                    <Link to="/all">Таблицата</Link>
                    <Link to="/exercises">Упражнения</Link>
					<Link to="/test-your-self">Пробвам</Link>
                </nav>
            </header>

            <div className="select-container">
                <select onChange={e => setNumberInput(e.target.value)}>
                    {[...Array(10)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                            {i + 1}
                        </option>
                    ))}
                </select>
            </div>

            <div className="ta-learning-container">
                <div className="ta-row-numbers">
                    {[...Array(10)].map((_, index) => (
                        <Card key={index} num1={numberInput} num2={index + 1} className='learning-card' />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Learning
