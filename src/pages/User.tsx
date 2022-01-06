import React, {FC, useEffect, useState} from 'react'
import {IUser} from "../types/types";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

export const User: FC = () => {
    const [user, setUser] = useState<IUser | null>(null)
    const params = useParams();
    const navigate = useNavigate();

    const fetchUser = async () => {
        try {
            const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id)
            setUser(response.data)
        } catch (e) {
            alert(e)
        }
    }

    useEffect(() => {
        fetchUser()
    }, [])

    return (
        <div>
            <button onClick={() => navigate(-1)}>Back</button>
            <div>
                {user?.name}
            </div>
        </div>
    )
}