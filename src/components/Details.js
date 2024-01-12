import React, { useState } from 'react';
import InputField from './InputField';

const AdditionalDetails = () => {
  const [selectedFields, setSelectedFields] = useState([]);

  const handleFieldSelection = (name) => {
    const updatedFields = selectedFields.includes(name)
      ? selectedFields.filter((field) => field !== name)
      : [...selectedFields, name];
    setSelectedFields(updatedFields);
  };

  return (
    <div>
      <h2>Plus de détails</h2>
      <InputField
        label="Champ 1"
        type="text"
        name="field1"
        value=""
        onChange={() => {}}
        selected={selectedFields.includes('field1')}
        onSelect={() => handleFieldSelection('field1')}
      />
      <InputField
        label="Champ 2"
        type="number"
        name="field2"
        value=""
        onChange={() => {}}
        selected={selectedFields.includes('field2')}
        onSelect={() => handleFieldSelection('field2')}
      />

    <InputField
        label="Champ 3"
        type="text"
        name="field1"
        value=""
        onChange={() => {}}
        selected={selectedFields.includes('field1')}
        onSelect={() => handleFieldSelection('field1')}
      />
      <InputField
        label="Champ 4"
        type="number"
        name="field2"
        value=""
        onChange={() => {}}
        selected={selectedFields.includes('field2')}
        onSelect={() => handleFieldSelection('field2')}
      />

    <InputField
        label="Champ 5"
        type="text"
        name="field1"
        value=""
        onChange={() => {}}
        selected={selectedFields.includes('field1')}
        onSelect={() => handleFieldSelection('field1')}
      />
      <InputField
        label="Champ 6"
        type="number"
        name="field2"
        value=""
        onChange={() => {}}
        selected={selectedFields.includes('field2')}
        onSelect={() => handleFieldSelection('field2')}
      />

    <InputField
        label="Champ 7"
        type="text"
        name="field1"
        value=""
        onChange={() => {}}
        selected={selectedFields.includes('field1')}
        onSelect={() => handleFieldSelection('field1')}
      />
      <InputField
        label="Champ 8"
        type="number"
        name="field2"
        value=""
        onChange={() => {}}
        selected={selectedFields.includes('field2')}
        onSelect={() => handleFieldSelection('field2')}
      />

    <InputField
        label="Champ 9"
        type="text"
        name="field1"
        value=""
        onChange={() => {}}
        selected={selectedFields.includes('field1')}
        onSelect={() => handleFieldSelection('field1')}
      />
      <InputField
        label="Champ 10"
        type="number"
        name="field2"
        value=""
        onChange={() => {}}
        selected={selectedFields.includes('field2')}
        onSelect={() => handleFieldSelection('field2')}
      />

    <InputField
        label="Champ 11"
        type="number"
        name="field2"
        value=""
        onChange={() => {}}
        selected={selectedFields.includes('field2')}
        onSelect={() => handleFieldSelection('field2')}
      />
    </div>
  );
};

export default AdditionalDetails;