const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

//Middleware
app.use(cors());
app.use(express.json());

//Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/blogDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=> console.log('MongoDB Connected'))
.catch((err)=> console.error('MongoDB error', err));

//Define schema and model
const postSchema = new mongoose.Schema({
    title: String,
    body: String,
}, {timestamps: true});

const Post = mongoose.model('Post', postSchema);

//Add Routes
app.get('/posts', async (req, res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    } catch(err){
        res.status(500).json({message: 'Failed to fetch posts'});
    }
});

app.post('/posts', async (req, res)=> {
    try{
        const {title, body} = req.body;
        const newPost = new Post({title,body});
        await newPost.save();
        res.json(newPost);
    } catch(err){
        res.status(500).json({message: 'Failed to save post!'});
    }
});

//Add delete and update
app.delete('/posts/:id', async (req, res)=> {
    try{
        const deletedPost = await Post.findByIdAndDelete(req.params.id);

        if (!deletedPost){
            return res.status(404).json({message: 'Post not found!'})
        }

        res.status(200).json({message: 'Post deleted successfully!'});
    } catch(err){
        console.error('Error deleting post: ', err);
        res.status(500).json({message: 'Failed to delete post'})
    }
});

app.put('/posts/:id', async (req, res)=>{
    try {
        const {title, body} = req.body;
        const updatedPost = await Post.findByIdAndUpdate(req.params.id, {title, body}, {new: true});
        if(!updatedPost)
            return res.status(404).json({message: 'Post not found!'});
        res.json(updatedPost);
    } catch(err){
        console.error('Error updating post: ', err);
        res.status(500).json({message: 'Failed to update post'})
    }
})

//Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});