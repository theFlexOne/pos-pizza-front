import './POSSettings.css';
import React from 'react';
import SettingsNavBar from '../SettingsNavBar/SettingsNavBar';
import SettingsContent from '../SettingsContent/SettingsContent';

export default function Settings() {
  return (
    <section className="Settings">
      <SettingsNavBar />
      <SettingsContent />
      {/* <main className="content">main!</main> */}
    </section>
  );
}
