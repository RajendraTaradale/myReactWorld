import React from 'react';

const UserList = ({ users, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className='list-group mb-4'>
      {users.map(us => (
        <li key={us.id} className='list-group-item'>
          {us.title}
        </li>
      ))}
    </ul>
  );
};

export default UserList;