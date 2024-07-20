import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import FlipCard from "../FlipCard"
import './TestYourSelf.scss'

const TestYourSelf = () => {
    const [numA, setNumA] = useState(1)
    const [numB, setNumB] = useState(1)
    const [newTest, setNewTest] = useState(false)

    const nextTest = () => {
        setNewTest(!newTest)
    }

    useEffect(() => {
        const num1 = Math.ceil(Math.random()*10)
        const num2 = Math.ceil(Math.random()*10)

        setNumA(num1)
        setNumB(num2)
    }, [newTest])

    return(
        <>
            <header className="header">
                <nav className="nav">
                    <Link to="/">Начало</Link>
                    <Link to="/all">Таблицата</Link>
                    <Link to="/learning">Уча</Link>
                    <Link to="/exercises">Упражнения</Link>
                </nav>
            </header>

            <div className="ta-next-container">
                <button onClick={nextTest}>Следващ тест</button>
            </div>

            <div className="ta-test">
                <FlipCard num1={numA} num2={numB} />
            </div>
        </>
    )
}

export default TestYourSelf
