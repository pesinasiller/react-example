import './ProfilePicture.css';

const ProfilePicture = ({ url, width }) => {
  return (
    <div className="profile-picture-container">
      <img src={url} alt="Profile" width={width} />
    </div>
  );
};

export default ProfilePicture;
