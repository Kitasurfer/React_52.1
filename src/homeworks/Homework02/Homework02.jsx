import React from 'react';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import { profiles } from '../../components/ProfileCard/data';
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
