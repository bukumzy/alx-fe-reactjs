function UserProfile(props) {
  return (
    <div
      style={{
        border: '1px solid gray',
        padding: '15px',
        margin: '15px',
        borderRadius: '8px',
        backgroundColor: '#f7f7f7'
      }}
    >
      <h2 style={{ color: 'blue', marginBottom: '10px' }}>
        {props.name}
      </h2>

      <p>
        Age:
        <span style={{ fontWeight: 'bold', marginLeft: '5px' }}>
          {props.age}
        </span>
      </p>

      <p style={{ fontStyle: 'italic' }}>
        Bio: {props.bio}
      </p>
    </div>
  );
}

export default UserProfile;
