import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Profile = () => {
  return (
    <div>
      <h2>Profile</h2>
      <hr />
      <br />
      <Link to='/profile/myaccount'>My Account</Link>
      <br />
      <Link to='/profile/mysetting'>My Settings</Link>

      <Outlet />
    </div>
  );
};

export default Profile;
