import React from 'react';
import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import FriendItem from './FriendListItem';

const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendlist}>
            {friends.map(friend => (
                <FriendItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
            />
        ))}
        </ul>
    );
        }

        FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;

