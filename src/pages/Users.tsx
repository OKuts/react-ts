import React, {FC, useEffect, useState} from 'react'
import {IUser} from "../types/types";
import axios from "axios";
import ListRender from "../components/ListRender";
import {UserItem} from "../components/UserItem";

interface IPropsType {

}

export const Users: FC<IPropsType> = () => {
    const [users, setUsers] = useState<IUser[]>([])

    const fetchUsers = async () => {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            setUsers(response.data)
        } catch (e) {
            alert(e)
        }
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <ListRender
            items={users}
            renderItem={(user: IUser) => <UserItem user={user} key={user.id}/>}/>
    )
}