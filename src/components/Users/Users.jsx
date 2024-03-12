import React from 'react';
import User from '../User/User';

import './Users.scss';
import Button from '../Button/Button';

const Users = ({ users }) => {
  return (
    <div className='users'>
     <div className='users-container'>
       {users?.map((user, index) => (
        <div className='user-card' key={index}>
          <User user={user} />
        </div>
      ))}
    </div>
    <Button text='Show more'/>
    </div>
   
  )
}

export default Users;