import React from 'react';

const InputField = ({ label, type, name, value, onChange, errorMessage }) => {
  return (
    <div>
      <label>{label}</label>
      {type === 'textarea' ? (
        <textarea name={name} value={value} onChange={(e) => onChange(name, e.target.value)} />
      ) : (
        <input type={type} name={name} value={value} onChange={(e) => onChange(name, e.target.value)} />
      )}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default InputField;
