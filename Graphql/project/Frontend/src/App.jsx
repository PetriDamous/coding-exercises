// import "./App.css";
import { useQuery, useMutation } from "@apollo/client";
import { Toolbar } from "./components";
import {
  ADD_SPEAKER,
  DELETE_SPEAKER,
  GET_SPEAKERS,
  TOGGLE_SPEAKER_FAVORITE,
} from "./graphql";

function App() {
  const { data, error, loading } = useQuery(GET_SPEAKERS);

  const [toggleSpeakerFavorite] = useMutation(TOGGLE_SPEAKER_FAVORITE);

  const [deleteSpeaker] = useMutation(DELETE_SPEAKER);

  const [addSpeaker] = useMutation(ADD_SPEAKER);

  if (loading) return <div>Loading....</div>;

  if (error) return <div>Error: {error.message}</div>;

  const insertSpeakerEvent = (first, last, favorite) => {
    addSpeaker({
      variables: {
        speakerInput: { first, last, favorite },
      },
      refetchQueries: [{ query: GET_SPEAKERS }],
    });
  };

  return (
    <>
      <Toolbar insertSpeakerEvent={insertSpeakerEvent} />
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
                    <div className="action">
                      <span
                        onClick={() =>
                          toggleSpeakerFavorite({
                            variables: {
                              speakerId: +id || id,
                            },
                          })
                        }
                      >
                        <div
                          className={
                            favorite === true
                              ? "fa fa-star orange"
                              : "fa fa-star-o orange"
                          }
                        />
                        &nbsp;&nbsp; Favorite
                      </span>
                      <span
                        onClick={() =>
                          deleteSpeaker({
                            variables: { speakerId: +id || id },
                            refetchQueries: [{ query: GET_SPEAKERS }],
                          })
                        }
                      >
                        <i className="fa fa-trash" />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
