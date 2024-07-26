import { useMutation } from "@apollo/client";
import { DELETE_SPEAKER, TOGGLE_SPEAKER_FAVORITE } from "../graphql/mutation";
import { GET_SPEAKERS } from "../graphql/query";

const Speaker = ({ speaker }) => {
  const [toggleFavSpeaker] = useMutation(TOGGLE_SPEAKER_FAVORITE);
  const [deleteSpeaker] = useMutation(DELETE_SPEAKER);

  const { id, first, last, favorite } = speaker;

  const favIconColor =
    favorite === true ? "fa fa-star orange" : "fa fa-star-o orange";

  const onToggleSpeaker = () => {
    toggleFavSpeaker({
      variables: {
        speakerId: id,
      },
      optimisticResponse: {
        toggleFavSpeaker: {
          id,
          first,
          last,
          favorite: !favorite,
          __typename: "Speaker",
        },
      },
    });
  };

  const onDeleteSpeaker = () => {
    deleteSpeaker({
      variables: {
        speakerId: id,
      },
      optimisticResponse: {
        deleteSpeaker: {
          id,
          first,
          last,
          favorite,
          __typename: "Speaker",
        },
      },
      update(cache, { data: { deleteSpeaker } }) {
        const { speakers } = cache.readQuery({
          query: GET_SPEAKERS,
        });

        const updatedSpeakers = speakers.filter(
          (speaker) => speaker.id !== deleteSpeaker.id
        );

        cache.writeQuery({
          query: GET_SPEAKERS,
          data: {
            speakers: updatedSpeakers,
          },
        });
      },
    });
  };

  return (
    <div className="favbox" key={id}>
      <div className="fav-clm col-sm-7">
        <h4>
          {first} {last} ({id})
        </h4>
      </div>
      <div className="fav-clm col-sm-5">
        <div className="action">
          <span onClick={onToggleSpeaker}>
            <div className={favIconColor} />
            &nbsp;&nbsp; Favorite
          </span>
          <span onClick={onDeleteSpeaker}>
            <i className="fa fa-trash red" /> Delete
          </span>
        </div>
      </div>
    </div>
  );
};

export default Speaker;
