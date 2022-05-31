import React from 'react';
import PropTypes from 'prop-types';
import css from './FriendList.module.css';

const FriendList = ({ friends }) => {
    return <ul className={css.friendlist}>
        {friends.map(friend => (
            <li key={friend.id} className={css.item} >
                <span className={friend.isOnline ? css.green : css.red }></span>
            <img className={css.avatar} src={friend.avatar} alt="User avatar" width="56" />
            <p className={css.name}>{friend.name}</p>
</li>
        ))}
</ul>
}

FriendList.protoType = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            isOnline: PropTypes.bool.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,

        })
    )
    
}

export default FriendList;

