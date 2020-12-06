import n from './NewRequestForm.module.css';
export const NewRequestForm = () =>{
    return <div className={n.formNewRequest}>
    <p className={n.header}>Оставить отзыв</p>
    <p>Ваш электронный адрес не будет опубликован.</p>
    <div>
        <textarea placeholder='Сообщение'/>
    </div>
    <div className={n.signatureNewRequest}>
        <div>
        <input id='name' type='text' placeholder='Имя'/>
        </div>
        <div>
        <input id='email' type='email' placeholder='E-mail (необязательно)'/>
        </div>
    </div>
    <div><button>отправить коментарий</button></div>
</div>
}