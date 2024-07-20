import './Card.scss'

const Card = ({num1, num2, className}) => {
    const classNames = ['ta-card-container']
    if (className) classNames.push(className)
    const result = num1 * num2

    return(
        <div className={classNames.join(' ')}>
            <div className='card'>
                <h1>{num1} . {num2} = {result}</h1>
            </div>
        </div>
    )
}

export default Card
