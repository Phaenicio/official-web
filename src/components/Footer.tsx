

const Footer = () => {
  return (
    <footer style={{
      textAlign: 'center',
      padding: '2rem',
      backgroundColor: 'var(--background)',
      color: 'var(--muted-foreground)',
      borderTop: '1px solid var(--border)',
      fontSize: '0.875rem'
    }}>
      <p>&copy; {new Date().getFullYear()} Phaenicio. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
