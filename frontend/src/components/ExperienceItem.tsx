interface Props {
  title: string;
  company: string;
  period: string;
  description: string;
}

export default function ExperienceItem({ title, company, period, description }: Props) {
  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <h3 style={{ marginBottom: '0.25rem' }}>{title}</h3>
      <p style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>{company} — {period}</p>
      <p style={{ margin: 0 }}>{description}</p>
    </div>
  );
}
