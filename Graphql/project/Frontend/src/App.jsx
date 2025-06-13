// import "./App.css";
import { useApolloClient, useQuery, useMutation } from "@apollo/client";
import { SpeakerList, Toolbar } from "./components";
import { ADD_SPEAKER, GET_SPEAKERS } from "./graphql";

function App() {
  const { data, error, loading } = useQuery(GET_SPEAKERS);

  const [addSpeaker] = useMutation(ADD_SPEAKER);

  const { cache } = useApolloClient();

  if (loading) return <div>Loading....</div>;

  if (error) return <div>Error: {error.message}</div>;

  const insertSpeakerEvent = (first, last, favorite) => {
    addSpeaker({
      variables: {
        speakerInput: { first, last, favorite },
      },
      update(cache, { data: { addSpeaker } }) {
        const { speakers } = cache.readQuery({ query: GET_SPEAKERS });

        cache.writeQuery({
          query: GET_SPEAKERS,
          data: {
            speakers: {
              __typename: "SpeakerResults",
              datalist: [addSpeaker, ...speakers.datalist],
            },
          },
        });
      },
    });
  };

  const sortByIdDescending = () => {
    const { speakers } = cache.readQuery({ query: GET_SPEAKERS });

    const speakersDescening = [...speakers.datalist].sort(
      (a, b) => b.id - a.id
    );

    cache.writeQuery({
      query: GET_SPEAKERS,
      data: {
        speakers: {
          __typename: "SpeakerResutls",
          datlist: speakersDescening,
        },
      },
    });
  };

  const toolBarProps = {
    insertSpeakerEvent,
    sortByIdDescending,
  };

  return (
    <>
      <Toolbar {...toolBarProps} />
      <div className="container show-fav">
        <div className="row">
          <div className="fav-list">
            <SpeakerList data={data} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
