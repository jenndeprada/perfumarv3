import {useState} from "react"

export const useCounter = (initial = 0, max, min) => {

    const [counter, setCounter] = useState(initial)

    const increment = (e) => {
        console.log(e)
        counter < max && setCounter( counter + 1)
    }

    const decrement = () => {
        counter > min && setCounter( counter -1)
    }
    return {
        counter, increment, decrement
    }
}