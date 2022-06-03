import React from 'react';
import PropTypes from 'prop-types';
import css from './profile.module.css';


const Profile = ({name, tag, location, avatar, followers, views, likes }) => {
   return <div className={css.profile}>
  <div className={css.description}>
    <img
      src={avatar}
         alt="User avatar"
         height="120px"
      className={css.avatar}
    />
       <p className={css.name}>{name}</p>
       <p className={css.tag}>@{tag}</p>
       <p className={css.location}>{location}</p>
  </div>

  <ul className={css.stats}>
    <li className={css.stats_list}>
      <span className={css.label}>Followers</span>
         <span className={css.quantity}>{followers}</span>
    </li>
    <li className={css.stats_list}>
      <span className={css.label}>Views</span>
         <span className={css.quantity}>{views}</span>
    </li>
    <li className={css.stats_list}>
      <span className={css.label}>Likes</span>
         <span className={css.quantity}>{likes}</span>
    </li>
  </ul>
</div>
}

Profile.prototype = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
}

export default Profile;