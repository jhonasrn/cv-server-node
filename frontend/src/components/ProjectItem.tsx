interface Props {
  title: string;
  description: string;
}

export default function ProjectItem({ title, description }: Props) {
  return (
    <div
      style={{
        backgroundColor: '#2a2a2a',
        padding: '1rem',
        borderRadius: '6px',
        marginBottom: '1rem',
        boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
      }}
    >
      <h3 style={{ marginBottom: '0.5rem', color: '#00bfff' }}>{title}</h3>
      <p style={{ margin: 0 }}>{description}</p>
    </div>
  );
}
