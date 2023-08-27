import React, { useState } from 'react';
import {authAvatar} from '../redux/auth/operations';
import { useDispatch } from 'react-redux';

export default function UpdateAvatar() {
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);
  
  const handleChange = (event) => {
  setFile(event.target.files[0]);
 }

 const handleUpload = () => {
  dispatch(authAvatar(file));
 }
  return (
    <div>UpdateAvatar
      <input type="file" onChange={handleChange}/>
      <button type='button' onClick={handleUpload}>Upload</button>
    </div>
  )
}
