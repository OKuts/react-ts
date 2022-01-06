import React, {FC, useRef} from 'react'
import {EventsExample} from "../components/EventsExample";
import {Card, CardVariant} from "../components/Card";

interface IPropsType {

}

export const Other: FC<IPropsType> = () => {
    const ref = useRef<HTMLInputElement>(null)

    const tryRef = () => {
        console.log(ref.current?.value)
    }

    return (
        <div>
            <input ref={ref} type="text" placeholder='ref'/>
            <button onClick={tryRef}>ref</button>
            <EventsExample/>
            <Card
                onClick={(num) => console.log('click ' + num)}
                height='200px'
                width='100px'
                variant={CardVariant.secondary}>
                <button>Send</button>
            </Card>
        </div>
    )
}