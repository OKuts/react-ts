import {ChangeEvent, MouseEvent, FC, useState} from 'react'

export const EventsExample: FC = () => {
    const [value, setValue] = useState('')

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        console.log(value)
    }

    return (
        <div>
            <input value={value} onChange={changeHandler} type='text'/>
            <button onClick={clickHandler}>Send</button>
        </div>
    )
}