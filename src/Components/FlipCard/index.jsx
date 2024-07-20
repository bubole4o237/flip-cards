import { useState } from 'react'
import ReactCardFlip from 'react-card-flip'
import './FlipCard.scss'

const FlipCard = ({num1, num2}) => {
    const [isFlipped, setIsFlipped] = useState(false)

    const flipCard = () => {
        setIsFlipped(!isFlipped)
    }

    const result = num1 * num2

    return(
        <div className='ta-flip-card-container'>
            <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped}>
                <div className='flip-card flip-card-front' onClick={flipCard}>
                    <h1>{num1} . {num2}</h1>
                </div>
                <div className='flip-card flip-card-back' onClick={flipCard}>
                    <h1>{result}</h1>
                </div>
            </ReactCardFlip>
        </div>
    )
}

export default FlipCard
