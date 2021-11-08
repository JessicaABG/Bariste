import { useState } from 'react';

export default function CraftCreate(props) {
  const [formData, setFormData] = useState({
    name: '',
  });
  const { name } = formData;
  const { handleCraftCreate } = props;

  const handleChange = (e) => {
    const { value } = e.target;
    setFormData({
      name: value,
    });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleCraftCreate(formData);
      }}
    >
      <h1>Create Craft</h1>
      <label>
        Name:
        <input type='text' value={name} onChange={handleChange} />
      </label>
      <br />
      <button>Submit</button>
    </form>
  );
}