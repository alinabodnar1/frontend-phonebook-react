import React from 'react';
import { useSelector } from 'react-redux';
import  {selectUser}  from '../redux/auth/selectors';
import { Link } from 'react-router-dom';


export default function ProfilePage() {
  const user = useSelector(selectUser);

  return (
    <div>
      <h3>ProfilePage</h3>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <img src={
        user.avatar.includes('gravatar') ? `${user.avatar}` : `http://localhost:8000/${user.avatar}`
        } alt="user"/>

      <Link to="update">Update avatar</Link>
    </div>
  )
}
