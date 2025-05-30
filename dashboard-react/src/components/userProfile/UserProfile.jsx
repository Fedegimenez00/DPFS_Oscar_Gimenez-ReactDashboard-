import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import './userProfile.css';

export const UserProfile = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/users/profile/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((e) => console.error(e));
  }, [id]);


  return (
    <div>
     <h3 className="section-title">Perfil de Usuario</h3>
     {user ? ( 
    <div className="user-detail-container">
      <article className="user-detail-card">
        <img
          className="user-detail-avatar"
          src={user.urlAvatar || "/default-avatar.png"}
          alt={`Avatar de ${user.name}`}
        />
        <div className="user-detail-info">
          <h2 className="user-detail-name">{user.name}</h2>
          {user.headline && <p className="user-detail-headline">"{user.headline}"</p>}
          {user.description && <p className="user-detail-description">{user.description}</p>}
          <div className="user-detail-meta">
            <p><strong>Email:</strong> {user.email}</p>
            {user.firstName && user.lastName && (
              <p><strong>Nombre completo:</strong> {user.firstName} {user.lastName}</p>
            )}
          </div>
        </div>
      </article>
    </div>
     ) : 
     (<p className="loading-message">Cargando perfil del usuario...</p>) 
     }
    </div>
  );
};
