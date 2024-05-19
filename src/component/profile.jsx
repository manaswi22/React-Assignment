import React, { useEffect, useState } from 'react';
import UserProfile from './userprofile';
import LoadingIndicator from './loadingindicator';
import './profiles.css'

const UserProfiles = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data.slice(0, 10)); // Limit to 10 users
        setLoading(false);
      });
    },2000)
  }, []);

  const handleDelete = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  if (loading) {
    return <div className='c'><LoadingIndicator /></div>;
  }

  return (
    <>
    <div className='user'>
      {users.map(user => (
        <UserProfile key={user.id} user={user} onDelete={handleDelete} />
      ))}
      </div>
   </>
  );
}

export default UserProfiles;
