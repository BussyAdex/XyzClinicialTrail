import Head from './Head';
import Row from './Row';
import './Table.css';

const Feed = ({ posts }) => {
  posts = posts.map(({ additionalDetails, ...rest }) => rest);
  return (
    <section className="table-container">
      <table>
        <Head />
        <tbody>
          {posts.map((post) => (
            <Row key={post.id} post={post} />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Feed;
