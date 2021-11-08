import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function CraftEdit(props) {
  const [formData, setFormData] = useState({
    name: '',
  });
  const { name } = formData;
  const { id } = useParams();
  const { crafts, handleCraftUpdate } = props;

  useEffect(() => {
    const prefillFormData = () => {
      const craftItem = crafts.find(craft => craft.id === Number(id))
      setFormData({
        name: craftItem.name
      })
    };
    if (crafts.length) {
      prefillFormData();
    }
  }, [crafts, id]);

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
        handleCraftUpdate(id, formData);
      }}
    >
      <h1>Edit Craft</h1>
      <label>
        Name:
        <input type='text' value={name} onChange={handleChange} />
      </label>
      <br />
      <button>Submit</button>
    </form>
  );
}
