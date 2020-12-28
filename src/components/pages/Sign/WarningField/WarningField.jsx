export const WarningField = ({type,message}) =>{
    const color = type === 'error' ? 'red' : type==='success' ? 'green' : 'black';
    return <div style={{color, fontWeight: 'bold'}}>
        {message}
    </div>
}