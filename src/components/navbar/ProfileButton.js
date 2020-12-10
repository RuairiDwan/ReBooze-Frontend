import React from 'react';
import { Link } from 'react-router-dom';

export default function ProfileButton() {
  return (
    <Link to='profile'>
      <button>Profile</button>
    </Link>
  );
}