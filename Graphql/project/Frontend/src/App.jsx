// import "./App.css";
import { useQuery } from "@apollo/client";
import { GET_SPEAKERS } from "./graphql";

function App() {
  const { data, error, loading } = useQuery(GET_SPEAKERS);

  if (loading) return <div>Loading....</div>;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container show-fav">
      <div className="row">
        <div className="fav-list">
          {data.speakers.datalist.map(({ id, first, last, favorite }) => {
            return (
              <div className="favbox" key={id}>
                <div className="fav-clm col-sm-7">
                  <h4>
                    {first} {last} ({id})
                  </h4>
                </div>
                <div className="fav-clm col-sm-5">
                  <span>
                    <div
                      className={
                        favorite === true
                          ? "fa fa-star orange"
                          : "fa fa-star-o orange"
                      }
                    />
                    &nbsp;&nbsp; Favorite
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
