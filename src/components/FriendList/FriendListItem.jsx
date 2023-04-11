import './FriendsList.css';
import PropTypes from 'prop-types'; 

const FriendsListItem = ({id,avatar,name,isOnline}) => {
    return (
        <li className="item" key={id} data-id={id}>
        <span className={isOnline ? 'statusDot' : 'statusDot offline'}></span>
        {/* <span className='statusDot'></span> */}
        <img className="friendsAvatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
        </li>
    )
}

export default FriendsListItem;

FriendsListItem.propTypes = {
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
  }