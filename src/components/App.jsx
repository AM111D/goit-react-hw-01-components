import React from 'react';
import user from './Profile/user';
import Profile from './Profile/Profile';
import data from './Statistics/data';
import Statistics from './Statistics/Statistics';
import friends from './FriendList/friends';
import FriendList from './FriendList/FriendList'



export const App = () => {
  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >
            {/* React homework template */}

     <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>

<Statistics title="Upload stats" stats={data} />

<FriendList friends={friends} />

    </div>
  );
};
