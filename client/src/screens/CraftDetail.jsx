import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOneCraft, addCommentToCraft } from '../services/crafts';

export default function CraftDetail(props) {
  const [craftItem, setCraftItem] = useState(null);
  const [selectedComment, setSelectedComment] = useState('');
  const { id } = useParams();
  const { comments } = props;

  useEffect(() => {
    const fetchCraftItem = async () => {
      const craftData = await getOneCraft(id);
      setCraftItem(craftData);
    };
    fetchCraftItem();
  }, [id]);

  const handleChange = (e) => {
    const { value } = e.target;
    setSelectedComment(value);
  };

  // Our handle submit for adding the comment to our craft
  const handleSubmit = async (e) => {
    e.preventDefault();
    const craftItem = await addCommentToCraft(selectedComment, id);
    setCraftItem(craftItem);
  };

  return (
    <div>
      <h3>{craftItem?.name}</h3>
      {craftItem?.comments.map((comment) => (
        <p key={comment.id}>{comment.name}</p>
      ))}
      {/* below is our for for the comment drop down */}
      <form onSubmit={handleSubmit}>
        <select onChange={handleChange} defaultValue='default'>
          {/* we can set a default value to tell people to select a comment*/}
          {/* the "defaultValue" on the <select> tag needs to match the "value" on our default <option> tag */}
          {/* we also add the "disabled" in the <option> to prevent users from selecting it*/}
          <option disabled value='default'>
            -- Select a Comment --
          </option>
          {/* now we loop over all comments and return an <option> tag for each */}

          {comments.map((comment) => (
            // we track the comment's id as the "value" which will get added to state onChange
            // the comment's name goes between the open and close tag which is what the user sees
            <option value={comment.id}>{comment.name}</option>
          ))}
        </select>
        <button>Add</button>
      </form>
    </div>
  );
}
