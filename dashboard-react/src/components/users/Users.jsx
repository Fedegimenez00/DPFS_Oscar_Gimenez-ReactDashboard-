import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './users.css';

export const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/users')
      .then((res) => res.json())
      .then((data) => setUsers(data.users))
      .catch((e) => console.error(e));
  }, []);

   return (
    <div className="users-container">
     <h3 className="section-title">Lista de Usuarios</h3>

      <div className="users-grid">
        {users.length ? (
          users.map((user) => (
          <Link key={user.id} to={`/users/profile/${user.id}`}> 
            <article className="user-card">
              <img
                className="user-avatar"
                src={user.urlAvatar}
                alt={`Avatar de ${user.name}`}
              />
              <div className="user-info">
                <h4 className="user-name">{user.name}</h4>
                <p className="user-email">{user.email}</p>
              </div>
            </article>
            </Link>
          ))
        ) : (
          <p className="loading-message">Cargando usuarios...</p>
        )}
      </div>
    </div>
  );
};
