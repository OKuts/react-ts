import React, {FC, useEffect, useState} from 'react'
import {ITodo} from "../types/types";
import axios from "axios";
import ListRender from "../components/ListRender";
import {TodoItem} from "../components/TodoItem";

interface IPropsType {

}

export const Todos: FC<IPropsType> = () => {
    const [todos, setTodos] = useState<ITodo[]>([])

    const fetchTodos = async () => {
        try {
            const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
            setTodos(response.data)
        } catch (e) {
            alert(e)
        }
    }

    useEffect(() => {
        fetchTodos()
    }, [])

    return (
        <ListRender
            items={todos}
            renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id}/>}/>
    )
}