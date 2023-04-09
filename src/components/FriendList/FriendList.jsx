import FriendsListItem from './FriendListItem';
// const {id, avatar, isOnline, name} = friends;
const FriendList = ({friends}) => {
    return (
        <ul className="friend-list">
            {friends.map(friend => (
                <FriendsListItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} id={friend.id}/>
            ))}
        </ul>
    )
}

export default FriendList;