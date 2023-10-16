import Cell from './Cell';
import './Table.css';

const Row = ({ post }) => {
  return (
    <tr>
      {Object.entries(post).map(([key, value]) => {
        return <Cell key={key} cellKey={key} cellData={value} />;
      })}
    </tr>
  );
};

export default Row;
