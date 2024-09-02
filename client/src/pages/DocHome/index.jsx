import DocSidebar from '../../components/DocSidebar';
import './style.css';

const Home = () => {
  return (
    <div className="doc-home">
      <div className="doc-sidebar">
        <DocSidebar />
      </div>
      <div className="doc-contents"></div>
    </div>
  );
};

export default Home;
