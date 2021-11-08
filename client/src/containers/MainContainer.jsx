import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import { deleteCraft, getAllCrafts, postCraft, putCraft } from '../services/crafts';
import { getAllComments } from '../services/comments';
import Crafts from '../screens/Crafts';
import CraftCreate from '../screens/CraftCreate';
import CraftEdit from '../screens/CraftEdit';
import Comments from '../screens/Comments';
import CraftDetail from '../screens/CraftDetail';

export default function MainContainer() {
  const [crafts, setCrafts] = useState([]);
  const [comments, setComments] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchCrafts = async () => {
      const craftList = await getAllCrafts();
      setCrafts(craftList);
    };
    fetchCrafts();
  }, []);

  useEffect(() => {
    const fetchComments = async () => {
      const commentList = await getAllComments();
      setComments(commentList);
    };
    fetchComments();
  }, []);

  const handleCraftCreate = async (formData) => {
    const newCraft = await postCraft(formData);
    setCrafts((prevState) => [...prevState, newCraft]);
    history.push('/crafts');
  };

  const handleCraftUpdate = async (id, formData) => {
    const newCraft = await putCraft(id, formData);
    setCrafts((prevState) =>
      prevState.map((craft) => {
        return craft.id === Number(id) ? newCraft : craft;
      })
    );
    history.push('/crafts');
  };

  const handleCraftDelete = async (id) => {
    await deleteCraft(id);
    setCrafts((prevState) => prevState.filter((craft) => craft.id !== id));
  };

  return (
    <Switch>

      {/* <Route path='/crafts'>
        
      </Route> */}
      <Route path='/crafts/:id/edit'>
        <CraftEdit crafts={crafts} handleCraftUpdate={handleCraftUpdate} />
      </Route>
      <Route path='/crafts/new'>
        <CraftCreate handleCraftCreate={handleCraftCreate} />
      </Route>
      <Route path='/crafts/:id'>
        <CraftDetail comments={comments} />
      </Route>
      <Route path='/crafts'>
        <Crafts crafts={crafts} handleCraftDelete={handleCraftDelete} />
      </Route>

      <Route path='/comments'>
        <Comments comments={comments} />
      </Route>
    </Switch>
  );
}
