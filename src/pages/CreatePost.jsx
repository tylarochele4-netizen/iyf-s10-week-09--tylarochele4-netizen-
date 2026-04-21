import React from 'react';
import { useState } from 'react';
import Button from '../components/shared/Button';
import Input from '../components/shared/Input';

function CreatePost() {
  const [formData, setFormData] = useState({ title: '', body: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New Post Data:', formData);
    alert(`Success! Post "${formData.title}" created locally.`);
    setFormData({ title: '', body: '' }); // Clear the form
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h2>Create a New Community Post</h2>
      <p>Fill out the form below to share your thoughts with the community.</p>
      
      <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
        <Input 
          label="Title" 
          name="title"
          value={formData.title} 
          onChange={handleChange} 
          placeholder="Enter an catchy title..." 
          required 
        />
        <Input 
          label="Content" 
          name="body"
          value={formData.body} 
          onChange={handleChange} 
          placeholder="What do you want to say?" 
          required 
        />
        <div style={{ marginTop: '10px' }}>
          <Button type="submit" disabled={!formData.title || !formData.body}>
            Publish Post
          </Button>
        </div>
      </form>
    </div>
  );
}

export default CreatePost;
