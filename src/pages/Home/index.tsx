import './style.css';

const Home: React.FC = () => {
  return (
    <div className="Home">
      <div className="option">
        <a href="/fluent-ui">Fluent UI</a>
      </div>
      <div className="option">
        <a href="/material-ui">Material UI</a>
      </div>
      <div className="option">
        <a href="/chakra-ui">Chakra UI</a>
      </div>
    </div>
  );
};

export default Home;
