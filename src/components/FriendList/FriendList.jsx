import FriendsListItem from './FriendListItem';
import PropTypes from 'prop-types'; 

const FriendList = ({friends}) => {
    return (
      <ul className="friend-list">
          {friends.map((friend) => (
              <FriendsListItem
                key={friend.id}
                id={friend.id}
                name={friend.name}
                avatar={friend.avatar}
                isOnline={friend.isOnline}
              />
))}
        </ul>
    )
}

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.array.isRequired
}

