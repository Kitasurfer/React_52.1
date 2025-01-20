import React from 'react';
import ProfileCard from './ProfileCard';
import { profiles } from './data';
import './styles.css';

const Homework02 = () => {
  return (
    <div className="homework-container">
      <h1 className="homework-title">User Profiles</h1>
      <div className="profiles-grid">
        {profiles.map(profile => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
      </div>
    </div>
  );
};

export default Homework02;
