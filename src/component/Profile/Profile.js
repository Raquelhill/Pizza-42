import { useAuth0 } from '@auth0/auth0-react';
import './Profile.css';

const Profile = (userMetadata) => {
  console.log(userMetadata);
  const { user, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <h3>Previous order</h3>
        {userMetadata ? (
          <h3>{JSON.stringify(userMetadata)}</h3>
        ) : (
          'You have never ordered from Pizza 42.  Welcome!'
        )}
      </div>
    )
  );
};

export default Profile;
