import { useMutation } from "@apollo/client";
import {
  DELETE_SPEAKER,
  GET_SPEAKERS,
  TOGGLE_SPEAKER_FAVORITE,
} from "../graphql";
import { Input } from "reactstrap";
import { useReactiveVar } from "@apollo/client";
import { checkboxIdsVar } from "../graphql/reactiveVars";

const Speaker = ({ id, first, last, favorite, fullName, isChecked }) => {
  const [toggleSpeakerFavorite] = useMutation(TOGGLE_SPEAKER_FAVORITE);

  const checkboxIds = useReactiveVar(checkboxIdsVar);

  const [deleteSpeaker] = useMutation(DELETE_SPEAKER, {
    update(cache, { data: { deleteSpeaker } }) {
      const { speakers } = cache.readQuery({ query: GET_SPEAKERS });

      cache.writeQuery({
        query: GET_SPEAKERS,
        data: {
          speakers: {
            __typename: "SpeakerResults",
            datalist: speakers.datalist.filter(
              (speaker) => speaker.id !== deleteSpeaker.id
            ),
          },
        },
      });
    },
  });

  const handleChecked = () => {
    if (isChecked) {
      const updateCheckboxIds = checkboxIds.filter(
        (checkboxId) => checkboxId !== id
      );
      checkboxIdsVar(updateCheckboxIds);
    } else {
      checkboxIdsVar([...checkboxIds, id]);
    }
  };

  return (
    <div className="favbox" key={id}>
      <div className="fav-clm col-sm-3">
        <Input onChange={handleChecked} type="checkbox" checked={isChecked} />
      </div>
      <div className="fav-clm col-sm-5">
        <h4>
          {fullName} ({id})
        </h4>
      </div>
      <div className="fav-clm col-sm-4">
        <div className="action">
          <span
            onClick={() =>
              toggleSpeakerFavorite({
                variables: {
                  speakerId: +id || id,
                },
                optimisticResponse: {
                  __typename: "Mutation",
                  toggleSpeakerFavorite: {
                    __typename: "Speaker",
                    id: +id || id,
                    first,
                    last,
                    favorite: !favorite,
                  },
                },
              })
            }
          >
            <div
              className={
                favorite === true ? "fa fa-star orange" : "fa fa-star-o orange"
              }
            />
            &nbsp;&nbsp; Favorite
          </span>
          <span
            onClick={() =>
              deleteSpeaker({
                variables: { speakerId: +id || id },
                optimisticResponse: {
                  __typename: "Mutation",
                  deleteSpeaker: {
                    __typename: "Speaker",
                    id,
                    first,
                    last,
                    favorite,
                  },
                },
              })
            }
          >
            <i className="fa fa-trash" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Speaker;
