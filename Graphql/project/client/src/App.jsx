// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./style-home.css";
import "./style-speakers.css";
import { useState } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import Toolbar from "./components/Toolbar";
import { GET_SPEAKERS } from "./graphql/query";
import {
  ADD_SPEAKERS,
  DELETE_SPEAKER,
  TOGGLE_SPEAKER_FAVORITE,
} from "./graphql/mutation";

function App() {
  const { loading, error, data } = useQuery(GET_SPEAKERS);
  const [toggleFavSpeaker] = useMutation(TOGGLE_SPEAKER_FAVORITE);
  const [deleteSpeaker] = useMutation(DELETE_SPEAKER);
  const [addSpeaker] = useMutation(ADD_SPEAKERS);

  if (loading) return <div className="col-sm6">Loading...</div>;

  if (error) return <div className="col-sm6">Error</div>;

  return (
    <>
      <Toolbar
        insertSpeakerEvent={(first, last, favorite) => {
          addSpeaker({
            variables: {
              input: {
                first,
                last,
                favorite,
              },
            },
            refetchQueries: [{ query: GET_SPEAKERS }],
          });
        }}
      />
      <div className="container show-fav">
        <div className="row">
          <div className="fav-list">
            {data?.speakers.map((speaker) => {
              const { id, first, last, favorite } = speaker;
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
                        onClick={() => {
                          toggleFavSpeaker({
                            variables: {
                              speakerId: id,
                            },
                          });
                        }}
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
                        onClick={() => {
                          deleteSpeaker({
                            variables: {
                              speakerId: id,
                            },
                            update(cache, data) {
                              console.log(data);
                            },
                          });
                        }}
                      >
                        <i className="fa fa-trash red" /> Delete
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
            <br />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
