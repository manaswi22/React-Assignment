import React, { useState } from 'react';
import './userprofile.css';

const UserProfile = ({ user, onDelete }) => {
  const [liked, setLiked] = useState(false);
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [website, setWebsite] = useState(user.website);
  const [company, setCompany] = useState(user.company.name);

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleDelete = () => {
    onDelete(user.id);
  };

  const handleEdit = () => {
    setEditing(!editing);
  };

  const handleSave = () => {
    setEditing(false);
    // Here, you would normally update the user data on the server
  };

  return (
   
      <div className="user-profile" style={{alignItems:'center'}}>
        <img  src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`} alt="Avatar" className="avatar" />
        <div className="user-info">
          {editing ? (
            <div>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
              <input type="url" value={website} onChange={(e) => setWebsite(e.target.value)} />
              <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} />
              <button onClick={handleSave}>Save</button>
            </div>
          ) : (
            <div>
              <h2>{name}</h2>
              <p><i className="bi bi-envelope"></i><strong> Email:</strong> {email}</p>
              <p><i className="bi bi-telephone"></i><strong> Phone:</strong> {phone}</p>
              <p><i className="bi bi-globe"></i><strong> Website:</strong> <a href={`http://${website}`} target="_blank" rel="noopener noreferrer">{website}</a></p>
              <p><i className="bi bi-building"></i><strong> Company:</strong> {company}</p>
            </div>
          )}
          <div className="emojis" style={{justifyContent:'space-around'}}>
            {/* <p onClick={handleLike}><i className={`bi bi-heart ${liked ? 'text-danger' : ''}`}></i></p> */}
            <p onClick={handleLike}><i className={`bi ${liked ? 'bi-heart-fill text-danger' : 'bi-heart'}`}></i></p>
            <p onClick={handleEdit}><i className="bi bi-pencil-square"></i></p>
            <p onClick={handleDelete}><i className="bi bi-trash"></i></p>
          </div>
        </div>
      </div>
   
  );
}

export default UserProfile;
