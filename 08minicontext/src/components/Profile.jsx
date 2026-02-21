import React,{useContext} from 'react'
import UserContext  from '../context/UserContext';

function Profile() {
    const { user } = useContext(UserContext);
  if (!user) {
    return <p className='text-center text-gray-500'>Please log in to see your profile.</p>;
  }
  else {
    return (
      <div className='bg-gray-200 p-4 rounded'>
        <h2 className='text-2xl font-bold mb-4'>Profile</h2>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Password:</strong> {user.password}</p>
      </div>
    );
  }
}

export default Profile
