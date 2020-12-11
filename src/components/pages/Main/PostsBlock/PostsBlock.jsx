import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import {connect} from 'react-redux';
import { getPostsAC } from '../../../../redux/postsReducer';
import p from './PostsBlock.module.css';
const PostsBlock = ({postList,getPosts}) =>{
    useEffect(()=>{getPosts()},[]);
    if(postList){const Posts = postList.map(el=><div>
        <img src={el.picture} alt='postPic'/>
        <div className={p.header}>{el.title}</div>
        <div className={p.date}><FontAwesomeIcon icon={faCalendarAlt}/>{el.date}</div>
    <div>{el.text}</div>
    </div>)
    return <div className={p.postBlock}>
    <div>
        <div className='content'>Ежедневная доставка вкуснейших суши и роллов с 11:00 до 22:00</div>
    </div>
    <div className='content'>
        {Posts}
    </div>
</div>}
else{
    return null;
}
}
const mapStateToProps = (state) =>({
    ...state.posts
});
const mapDispatchToProps = (dispatch) =>({
    getPosts: ()=>dispatch(getPostsAC())
})
export default connect(mapStateToProps,mapDispatchToProps)(PostsBlock);