import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App(){
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState({title:'', body:''});
  const [editId, setEditId] = useState(null); // add editId state
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:5000/posts')
    .then(res => setPosts(res.data))
    .catch(err => console.error("Error fetching posts:", err))
    .finally(() => setLoading(false));
  }, []);

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    //Add edit mode
    if(editId){
      axios.put(`http://localhost:5000/posts/${editId}`, form)
      .then(res =>{
        setPosts(prev => prev.map(post => post._id === editId ? res.data:post));
        setForm({title: '', body: ''});
        setEditId(null);
      })
      .catch(err => console.error('Error updating the post: ', err))
    } else{
      axios.post('http://localhost:5000/posts', form)
      .then(res => {
        setPosts([...posts, res.data])
        setForm({title:'', body:''})
      })
      .catch(err =>console.error("Error submitting the post: ", err))
    }
  }

  //Add handleDelete
  const handleDelete = async(id) =>{
    const confirmDelete = window.confirm('Are you sure you want to delete this post?');
    if (!confirmDelete)
      return;

    try{
      await axios.delete(`http://localhost:5000/posts/${id}`);
      setPosts(prev => prev.filter(post =>post._id !== id));
    } catch(err){
      console.error('Failed to delete post: ', err);
    }
  }

  //Add handleEdit
  const handleEdit = (post) =>{
    setEditId(post._id);
    setForm({title: post.title, body: post.body});
  }

  return (
    <div style={{padding:'20px', maxWidth:'600px', margin:'auto'}}>
      <h2>{editId ? 'Edit Post' : 'Create a Blog Post'}</h2>
      <form onSubmit={handleSubmit} style={{marginBottom:'2rem'}}>
        <input name="title" placeholder='Post Title' value={form.title} onChange={handleChange} style={{width:'100%', padding:'10px', marginBottom:'10px'}}/>
        <textarea name="body" placeholder='Post Body' value={form.body} onChange={handleChange} style={{width:'100%', padding:'10px', height:'100px', marginBottom:'10px'}}/>
        <button type='submit' style={{padding: '10px 20px'}}>{editId ? 'Update Post' : 'Submit Post'}</button>
        {editId && (
        <button type='button' onClick={() =>{setForm({title: '', body: ''}); setEditId(null);}} style={{padding:'5px', backgroundColor: 'grey', color: 'white'}}>Cancel Edit</button>
        )}
        </form>

      <h2>Blog Posts</h2>
      {loading ? (<p style={{textAlign: 'center'}}>Loading posts...</p>) : (

      posts.map(post =>(
        <div key={post.id} style={{border:'1px solid #ccc', padding:'10px', marginBottom:'15px'}}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <small style={{color: 'grey'}}>Posted on: {new Date(post.createdAt).toLocaleString()}</small>
          <button onClick={() => handleEdit(post)} style={{padding:'5px', backgroundColor: 'grey', color: 'white'}}>Edit Post</button>
          <button onClick={() => handleDelete(post._id)} style={{padding:'5px', backgroundColor: 'maroon', color: 'white'}}>Delete Post</button>
        </div>
      ))
    )}
    </div>
  )
}
export default App;