import { Link } from 'react-router-dom';

export default function Crafts(props) {
  const { crafts, handleCraftDelete } = props;
  return (
    <div>
      <h3>Crafts</h3>
      {crafts.map((craft) => (
        <div key={craft.id}>
          <Link to={`/crafts/${craft.id}`}>
            <p><img src={craft.img_url} height='auto' width='200px' alt='images of beverages'/>{craft.about}</p>
          </Link>
          <Link to={`/crafts/${craft.id}/edit`}>
            <button>edit</button>
          </Link>
          <button onClick={() => handleCraftDelete(craft.id)}>delete</button>
        </div>
      ))}
      <Link to='/crafts/new'>
        <button>create</button>
      </Link>
    </div>
  );
}
