import React from 'react';
import { ListChecks } from 'lucide-react';
import CheckboxGroup from '../../shared/CheckboxGroup';

function Preferences({ preferences, selectedPreferences = [], onPreferenceChange }) {
  return (
    <CheckboxGroup
      title="Preferências"
      icon={ListChecks}
      items={preferences}
      selectedItems={selectedPreferences}
      onChange={onPreferenceChange}
    />
  );
}

export default Preferences;