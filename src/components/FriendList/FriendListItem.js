import PropTypes from 'prop-types';
import css from './FriendsList.module.css';

const FriendsListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <li className={css.item} key={id} data-id={id}>
      <span
        className={
          isOnline
            ? css.statusDot + ' ' + css.online
            : css.statusDot + ' ' + css.offline
        }
      ></span>
      {/* <span className='statusDot'></span> */}
      <img
        className={css.friendsAvatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={css.name}>{name}</p>
    </li>
  );
};

export default FriendsListItem;

FriendsListItem.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
