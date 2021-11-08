import { useState } from 'react';

export default function CraftCreate(props) {
  const [formData, setFormData] = useState({
    about: '',
    img_url:''
  });
  // const { about } = formData;
  // const { img_url } = formData;
  const { handleCraftCreate } = props;

  const handleChange = (e) => {
    const { value } = e.target;
    setFormData({
      about: value,
      img_url:value
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
        Image Address:
        <input 
        type='text' 
        value={formData.img_url} 
        onChange={handleChange} />
      </label>
      <br />
      <label>
        About:
        <input 
        type='text' 
        value={formData.about} 
        onChange={handleChange} />
      </label>
      <br />
      <button>Submit</button>
    </form>
  );
}