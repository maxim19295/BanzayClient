import { NavLink } from "react-router-dom"

export const TitleCell = ({title}) =>{
    return <td>
    <NavLink to='/sushi'><p style={{color: 'red'}}>{title}</p></NavLink>
    </td>
}