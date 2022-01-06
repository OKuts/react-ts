import {FC} from 'react'
import {NavLink, Outlet} from "react-router-dom";

interface IPropsType {

}

export const Layout: FC<IPropsType> = () => {
    return (
        <div>
            <nav>
                <NavLink to='/'>Other</NavLink>
                <NavLink to='/users'>Users</NavLink>
                <NavLink to='/todos'>Todos</NavLink>
            </nav>

            <Outlet />
        </div>
    )
}