import {ReactNode} from "react";

interface IListRenderProps<T> {
    items: T[]
    renderItem: (item: T) => ReactNode
}

export default function ListRender<T> (props: IListRenderProps<T>)  {
    return (
        <div>
            {props.items.map(props.renderItem)}
        </div>
    )
}