import React from 'react';
import PropTypes from 'prop-types';
import css from './FriendList.module.css';

const FriendList = ({ friends }) => {
    return <ul className={css.friendlist}>
        {friends.map(({avatar, name, isOnline, id}) => (
            <li key={id} className={css.item} >
                <span className={isOnline ? css.green : css.red }></span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="56" />
            <p className={css.name}>{name}</p>
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

