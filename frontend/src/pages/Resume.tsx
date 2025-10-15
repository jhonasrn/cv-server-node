import Header from '../components/Header';
import ExperienceItem from '../components/ExperienceItem';

export default function Resume() {
  return (
    <>
      <Header />
      <main style={{ backgroundColor: '#1a1a1a', color: '#fff', padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <section style={{ marginBottom: '2rem', textAlign: 'center' }}>
          <h2>About</h2>
          <p>
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2>Experience</h2>
          <ExperienceItem
            title="Frontend Developer"
            company="TechCorp"
            period="Jan 2020 – Present"
            description="Desenvolvimento de interfaces modernas com React e integração com APIs REST."
          />
        </section>
      </main>
    </>
  );
}
