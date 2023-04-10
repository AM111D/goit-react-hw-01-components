import './FriendsList.css';

const FriendsListItem = ({id,avatar,name,isOnline}) => {
    return (
        <li className="item" key={id} data-id={id}>
        <span className={isOnline ? 'statusDot' : 'statusDot offline'}></span>
        {/* <span className='statusDot'></span> */}
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
        </li>
    )
}

export default FriendsListItem;