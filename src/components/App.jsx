import React from 'react';
import user from './Profile/user';
import Profile from './Profile/Profile';
import data from './Statistics/data';
import Statistics from './Statistics/Statistics';
import friends from './FriendList/friends';
import FriendList from './FriendList/FriendList';
import transactions from './TransactionHistory/transactions';
import TransactionHistory from './TransactionHistory/TransactionHistory';


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
  name={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
  followers={user.stats.followers}
  views={user.stats.views}
  likes={user.stats.likes}

/>

<Statistics title="Upload stats" stats={data} />

<FriendList friends={friends} />

<TransactionHistory items={transactions} />;

    </div>
  );
};
