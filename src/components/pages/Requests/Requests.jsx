import { NewRequestForm } from './NewRequestForm/NewRequestForm';
import { RequestsList } from './RequestsList/RequestList';
export const Requests = () =>{
    return <div className='content'>
        <p>
            Оставьте ваш отзыв о нашей доставке Суши. Ваше мнение для нас важно.
        </p>
        <NewRequestForm/>
        <RequestsList/>
    </div>
}