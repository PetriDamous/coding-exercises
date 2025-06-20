import { useMutation } from "@apollo/client";
import { DELETE_SPEAKER, TOGGLE_SPEAKER_FAVORITE } from "../graphql/mutation";
import { GET_SPEAKERS } from "../graphql/query";
import { checkBoxColumsVar } from "../graphql/useApollo";

const Speaker = ({ speaker }) => {
  const { id, checkBoxColumn, first, last, favorite, fullName } = speaker;

  const toggleFavSpeakerConfig = {
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
  };

  const deleteSpeakerConfig = {
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
  };

  const [toggleFavSpeaker] = useMutation(
    TOGGLE_SPEAKER_FAVORITE,
    toggleFavSpeakerConfig
  );
  const [deleteSpeaker] = useMutation(DELETE_SPEAKER, deleteSpeakerConfig);

  const favIconColor =
    favorite === true ? "fa fa-star orange" : "fa fa-star-o orange";

  const onToggleSpeaker = () => {
    toggleFavSpeaker();
  };

  const onDeleteSpeaker = () => {
    deleteSpeaker();
  };

  const onToggleCheckBox = () => {
    const checkedSpeakerIds = checkBoxColumsVar();

    const foundChecked = checkedSpeakerIds.find(
      (checkedSpeakerId) => checkedSpeakerId === id
    );

    if (foundChecked) {
      const filteredIds = checkedSpeakerIds.filter(
        (checkedSpeakerId) => checkedSpeakerId !== foundChecked
      );

      checkBoxColumsVar(filteredIds);

      return;
    }

    checkBoxColumsVar([...checkedSpeakerIds, id]);
  };

  return (
    <div className="favbox" key={id}>
      <div className="fav-clm col-sm-7">
        <span
          className={checkBoxColumn ? "fa fa-check-square-o" : "fa fa-square-o"}
          onClick={onToggleCheckBox}
          style={{ cursor: "pointer" }}
        ></span>
        <h4>
          {fullName} ({id})
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
