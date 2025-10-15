export default function Header() {
  return (
    <header
      style={{
        backgroundColor: '#0073b1',
        color: '#fff',
        height: '300px',
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', // vertically center content
        alignItems: 'center',     // horizontally center content
        textAlign: 'center',
        boxSizing: 'border-box',
        padding: '2rem',
      }}
    >
      {/* Home button in the top-right corner */}
      <button
        style={{
          position: 'absolute',
          top: '1rem',
          right: '2rem',
          backgroundColor: '#fff',
          color: '#0073b1',
          border: 'none',
          padding: '0.5rem 1rem',
          borderRadius: '4px',
          cursor: 'pointer',
          fontWeight: 'bold',
        }}
      >
        Home
      </button>

      {/* Profile photo */}
      <img
        src="/profile.jpg" // make sure this image is placed inside the public folder
        alt="Profile photo"
        style={{
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          objectFit: 'cover',
          marginBottom: '1rem',
          border: '3px solid white',
        }}
      />

      {/* Name and subtitle */}
      <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Jhonas Nascimento</h1>
      <h2 style={{ fontSize: '1.25rem', fontWeight: 'normal' }}>Online Resume</h2>
    </header>
  );
}
