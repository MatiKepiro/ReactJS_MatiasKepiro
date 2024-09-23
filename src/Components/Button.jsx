import "./Button.css"
import { useState } from "react"

export const Button = (props) => {
    const [count, setCount] = useState(0)
    const handleClick = () => {
        setCount(count + 1)
    }

    if (count % 2 == 0) {
        return (
            <button className="button_click" onClick={handleClick} style={{color: props.color1}}>Click aqui!</button>
            
        )
    } else {
        return (
            <button className="button_click" onClick={handleClick} style={{color: props.color2}}>Click aqui!</button>
            
        )
    }

}