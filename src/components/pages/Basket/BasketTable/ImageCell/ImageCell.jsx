import { NavLink } from 'react-router-dom';
import sushi from '../../../../../72.jpg';
export const ImageCell = () =>{
    return <td>
    <NavLink to='/sushi'>
        <img src={sushi} alt="gfjfjjf" style={{height: 60}}/>
    </NavLink>
</td> 
}