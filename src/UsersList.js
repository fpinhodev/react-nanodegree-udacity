import React from 'react';

const UsersList = ({users}) => {
  return (
    <ul>
      {
        Object.values(users).map((user, index) => {
          return <li key={index}>{user.name}</li>;
        })
      }
    </ul>
  )
}

export default UsersList;