import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/posts';
import DataContext from '../context/DataContext';

const NewPost = () => {
  const [editPatientId, setEditPatientId] = useState('');
  const [editName, setEditName] = useState('');
  const [editAge, setEditAge] = useState('');
  const [editGender, setEditGender] = useState('');
  const [editCondition, setEditCondition] = useState('');
  const [editRecruitmentDate, setEditRecruitmentDate] = useState('');
  const [editAdditionalDetails, setEditAdditionalDetails] = useState('');
  const { posts, setPosts } = useContext(DataContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = { patientId: editPatientId, name: editName, age: editAge, gender: editGender, condition: editCondition, recruitmentDate: editRecruitmentDate, additionalDetails: editAdditionalDetails };
    try {
        const response = await api.post('/api/xyzclinical', newPost);
        const allPosts = [...posts, response.data];
        setPosts(allPosts);
        setEditPatientId('');
        setEditName('');
        setEditAge('');
        setEditGender('');
        setEditCondition('');
        setEditRecruitmentDate('');
        setEditAdditionalDetails('');
        navigate('/');
    } catch (err) {
        console.log(`Error: ${err.message}`);
    }
  }

  return (
    <main className="NewPost">
            <h2>New Record</h2>
            <form className="newPostForm" onSubmit={handleSubmit}>
            <label htmlFor="postPatientId">Id:</label>
            <input
                id="postPatientId"
                type="text"
                required
                value={editPatientId}
                onChange={(e) => setEditPatientId(e.target.value)}
            />
            <label htmlFor="postName">Name:</label>
            <input
                id="postName"
                type="text"
                required
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
            />
            <label htmlFor="postAge">Age:</label>
            <input
                id="postAge"
                type="number"
                required
                step="1"
                value={editAge}
                onChange={(e) => setEditAge(e.target.value)}
            />
            <label htmlFor="postGender">Gender:</label>
            <select
                id="postGender"
                required
                value={editGender}
                onChange={(e) => setEditGender(e.target.value)}
            >
                <option value=""></option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="prefer">Prefer not to say</option>
            </select>
            <label htmlFor="postCondition">Condition:</label>
            <input
                id="postCondition"
                type="text"
                required
                value={editCondition}
                onChange={(e) => setEditCondition(e.target.value)}
            />
            <label htmlFor="postRecruitmentDate">Recruitment Date:</label>
            <input
                id="postRecruitmentDate"
                type="date"
                required
                value={editRecruitmentDate}
                onChange={(e) => setEditRecruitmentDate(e.target.value)}
            />
            <label htmlFor="postAdditionalDetails">Additional Details:</label>
            <textarea 
                id="postAdditionalDetails"
                value={editAdditionalDetails} 
                onChange={(e) => setEditAdditionalDetails(e.target.value)}
            />
              <button type="submit">Submit</button>
            </form>
        </main>
  )
}

export default NewPost