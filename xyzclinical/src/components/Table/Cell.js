import { Link } from 'react-router-dom';
import { FaRegListAlt } from 'react-icons/fa';
import './Table.css';

const Cell = ({ cellKey, cellData }) => {
  return (
    <td>
      {cellKey === 'id' ? (
        <Link
          to={`/post/${cellData}`}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <FaRegListAlt />
          <p style={{ marginLeft: '10px' }}>view</p>
        </Link>
      ) : (
        cellData
      )}
    </td>
  );
};

export default Cell;
