import React from 'react';
import { SlidersHorizontal } from 'lucide-react';
import CheckboxGroup from '../../shared/CheckboxGroup';

function Features({ features, selectedFeatures = [], onFeatureChange }) {
  return (
    <CheckboxGroup
      title="Funcionalidades"
      icon={SlidersHorizontal}
      items={features}
      selectedItems={selectedFeatures}
      onChange={onFeatureChange}
    />
  );
}

export default Features;