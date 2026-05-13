import useFetch from "./Hooks/UseFetch";
import "./App.css";

function App() {

  // using custom hook
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/photos"
  );

  return (
    <div className="container">

      <h1 style={{ color: "black" }}>Photos</h1>

      {/* loading */}
      {loading && <p className="message">Loading...</p>}

      {/* error */}
      {error && <p className="error">{error}</p>}

      {/* photo grid */}
      <div className="grid-container">

        {!loading &&
          !error &&
          data.slice(0, 30).map((photo) => (

            <div className="card" key={photo.id}>

              <img
                src={photo.thumbnailUrl}
                alt={photo.title}
              />

              <p>
                {photo.title.split(" ").slice(0, 5).join(" ")}
              </p>

            </div>

          ))}

      </div>

    </div>
  );
}

export default App;