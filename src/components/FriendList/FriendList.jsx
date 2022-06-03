import React from 'react';
import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import FriendListItem from './FriendListItem';
import FriendItem from './FriendListItem';

const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendlist}>
            {friends.map(friend => (
                <FriendItem
                    avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          key={friend.id}
            />
        ))}
        </ul>
    );
        }


export default FriendList;

