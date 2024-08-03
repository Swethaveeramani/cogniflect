import React from 'react';

// Inline CSS for the CompanyStory component
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  headerTitle: {
    color: '#333',
    fontSize: '2.5rem',
  },
  headerText: {
    fontSize: '1.2rem',
    color: '#666',
    margin: '10px 0',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    marginTop: '20px',
  },
  stats: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    margin: '20px 0',
  },
  statsCard: {
    backgroundColor: '#f4f4f4',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
    flex: '1',
    margin: '10px',
  },
  statsCardTitle: {
    fontSize: '1.5rem',
    color: '#333',
  },
  growthInput: {
    padding: '10px',
    fontSize: '1rem',
    margin: '10px 0',
    width: '80%',
  },
  growthButton: {
    padding: '10px 20px',
    fontSize: '1rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  motivation: {
    marginTop: '20px',
  },
  motivationTitle: {
    color: '#007bff',
    fontSize: '2rem',
    textAlign: 'center',
    marginBottom: '20px',
  },
  motivationText: {
    fontSize: '1.1rem',
    color: '#333',
    lineHeight: '1.6',
    marginBottom: '15px',
  },
};

const CompanyStory = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.headerTitle}>The Story About Our Amazing Company</h1>
        <p style={styles.headerText}>
          A decade ago, in the bustling world of freelancing, a group of talented individuals embarked on separate paths, each possessing unique skills honed over years of dedication. Hailing from diverse fields, they wielded talents in digital marketing, web development, design, and more. But destiny had something more profound in store for them.
        </p>
        <img 
          src="https://emeritus.org/in/wp-content/uploads/sites/3/2023/03/Social-Media-Advertising.jpg.optimal.jpg" 
          alt="Freelancing Journey" 
          style={styles.image} 
        />
      </header>

      <section style={styles.stats}>
        <div style={styles.statsCard}>
          <h2 style={styles.statsCardTitle}>10+ Years of Experience</h2>
        </div>
        <div style={styles.statsCard}>
          <h2 style={styles.statsCardTitle}>15K+ Users Worldwide</h2>
        </div>
        <div style={styles.statsCard}>
          <h2 style={styles.statsCardTitle}>8–25% Potential Growth</h2>
        </div>
        <div style={styles.statsCard}>
          <input 
            type="number" 
            min="0" 
            placeholder="Enter percentage increase" 
            style={styles.growthInput} 
          />
          <button style={styles.growthButton}>Submit</button>
        </div>
        <img 
          src="https://www.cogniflect.com/wp-content/uploads/2023/11/Digital-Marketing-profit-maker-1024x1536.jpg" 
          alt="Digital Marketing" 
          style={styles.image} 
        />
      </section>

      <section style={styles.motivation}>
        <h2 style={styles.motivationTitle}>The Motivation: Forging Excellence through Collaboration</h2>
        <p style={styles.motivationText}>
          Where Talent Meets Innovation
        </p>
        <p style={styles.motivationText}>
          As these freelancers navigated their distinct journeys, their experiences deepened their understanding of the digital landscape. They witnessed the ever-evolving needs of businesses and recognized that a new era was dawning—one that demanded a fusion of creative brilliance and technological prowess.
        </p>
        <p style={styles.motivationText}>
          The freelancers realized that by joining forces, they could bridge the gap between creativity and technology, crafting digital solutions that transcended convention. This insight was the catalyst for their collaborative venture.
        </p>
        <p style={styles.motivationText}>
          Drawing inspiration from their individual paths, they set out to establish a company that would amplify the impact of their skills. It was a journey fueled by their unwavering belief in the power of collaboration to drive innovation.
        </p>
        <p style={styles.motivationText}>
          With a shared vision to redefine digital excellence, they invited experienced freelancers to lead their teams. These leaders, having walked the same road, understood the nuances of freelancing and were well-equipped to guide both the team and clients toward success.
        </p>
        <p style={styles.motivationText}>
          Today, they stand as a formidable force in the digital realm, seamlessly weaving together talent and innovation. Their commitment to excellence continues to inspire businesses, from startups with audacious dreams to established enterprises seeking transformation.
        </p>
        <p style={styles.motivationText}>
          Together, they continue to script a story where talent meets innovation, rewriting the rules of digital engagement, and inspiring a new generation of entrepreneurs to forge their path to excellence.
        </p>
      </section>
    </div>
  );
};

export default CompanyStory;
