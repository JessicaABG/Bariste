import api from './api-config'

export const getAllCrafts = async () => {
    const resp = await api.get('/crafts');
    return resp.data;
  };
  
  export const getOneCraft = async (id) => {
    const resp = await api.get(`/crafts/${id}`);
    return resp.data;
  };
  
  export const postCraft = async (craftData) => {
    const resp = await api.post('/crafts', { craft: craftData });
    return resp.data;
  };
  
  export const putCraft = async (id, craftData) => {
    const resp = await api.put(`/crafts/${id}`, { craft: craftData });
    return resp.data;
  };
  
  export const deleteCraft = async (id) => {
    const resp = await api.delete(`/crafts/${id}`);
    return resp;
  };
  
  export const addCommentToCraft = async (commentId, id) => {
    const resp = await api.put(`/comments/${commentId}/crafts/${id}`);
    return resp.data;
  };
  