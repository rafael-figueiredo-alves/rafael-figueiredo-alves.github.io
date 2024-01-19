import { useState } from 'react'

interface CountButtonProps {
    Inicio? : number
}

function CountButton({Inicio = 0} : CountButtonProps) {
    const [count, setCount] = useState(Inicio);

    return (

        <button className='btn btn-primary' onClick={() => setCount((count) => count + 1)}>
            Contando ... {count}
        </button>)
}

export default CountButton;