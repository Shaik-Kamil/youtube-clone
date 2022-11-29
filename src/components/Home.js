import './Home.css';

export default function Home({ videos }) {
  return (
    <div>
      <div className="searches">
        {videos.length === 0 ? (
          <p>No Search Results Yet! Please submit a search above!</p>
        ) : null}
      </div>
    </div>
  );
}
