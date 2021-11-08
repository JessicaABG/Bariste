import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function CraftEdit(props) {
  const [formData, setFormData] = useState({
    about: '',
    img_url:''
  });
  const { about, img_url } = formData;
  const { id } = useParams();
  const { crafts, handleCraftUpdate } = props;

  useEffect(() => {
    const prefillFormData = () => {
      const craftItem = crafts.find(craft => craft.id === Number(id))
      setFormData({
        about: craftItem.about,
        img_url: craftItem.img_url
      })
    };
    if (crafts.length) {
      prefillFormData();
    }
  }, [crafts, id]);

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
        handleCraftUpdate(id, formData);
      }}
    >
      <h1>Edit Craft</h1>
      <label>
        About:
        <input 
        type='text' 
        value={about} 
        onChange={handleChange} />
      </label>
      <br />
      <label>
        Image Address:
        <input 
        type='text' 
        value={img_url} 
        onChange={handleChange} />
      </label>
      <button>Submit</button>
    </form>
  );
}
