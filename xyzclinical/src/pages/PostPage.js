import React from 'react'
import { useParams, Link, useNavigate} from "react-router-dom";
import { useContext } from 'react';
import api from '../api/posts';
import DataContext from '../context/DataContext';

const PostPage = () => {
  const { posts, setPosts } = useContext(DataContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find(post => (post.id).toString() === id);
  { console.log(post)}

  const handleDelete = async (id) => {
    try {
        await api.delete(`/api/xyzclinical/${id}`);
        const postsList = posts.filter(post => post.id !== id);
        setPosts(postsList);
    } catch (err) {
        console.log(`Error: ${err.message}`);
    }
  } 

  return (
    <main className='PostPage'>
    <article className='post'>
        {post && 
            <>
                <h2>{`ID: ${post.patientId}`}</h2>
                <p className='postDate'>{`Name: ${post.name}`}</p>
                <p className='postDate'>{`Age: ${post.age}`}</p>
                <p className='postDate'>{`Gender: ${post.gender}`}</p>
                <p className='postDate'>{`Condition: ${post.condition}`}</p>
                <p className='postDate'>{`Recruitment Date: ${post.recruitmentDate}`}</p>
                <p className='postDate'>{`Additional Details: ${post.additionalDetails}`}</p>
                
                <Link to={`/edit/${post.id}`}><button className='editButton'>Edit Post</button></Link>
                <button className="deleteButton" onClick={() => {
                  handleDelete(post.id);
                  navigate('/');}}>
                  Delete Post
                </button>
            </>
        }
        {!post &&
            <>
                <h2>Post Not Found</h2>
                <p>Well, that's disappointing.</p>
                <p>
                    <Link to='/'>Visit Our Homepage</Link>
                </p>
            </>
        }
    </article>
</main>
  )
}

export default PostPage