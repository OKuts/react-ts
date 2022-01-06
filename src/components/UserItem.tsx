import {FC, MouseEventHandler} from "react";
import {IUser} from "../types/types";
import {useNavigate} from "react-router-dom";

interface IUserItemProps {
    user: IUser
}

export const UserItem: FC<IUserItemProps> = ({user}) => {
    const navigate = useNavigate();

    const handler = (id: number) => {
        navigate(`/users/${id}`)
    }

    return (
        <div onClick={() =>  handler(user.id)}>{user.id}. {user.name} street: {user.address.street}</div>
    )
}