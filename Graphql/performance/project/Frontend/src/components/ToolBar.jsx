import { useMutation, useApolloClient } from "@apollo/client";
import { useState } from "react";
import { Button } from "reactstrap";
import { ToolBarModal } from ".";
import {
  themeVar,
  paginationDataVar,
  checkboxIdsVar,
} from "../graphql/reactiveVars";
import { useReactiveVar } from "@apollo/client";
import { PagingOffsetLimitControl } from "./index";
import { TOGGLE_SPEAKER_FAVORITE } from "../graphql";
import { getAllSpeakersFromCache } from "../utils";

const Toolbar = ({
  insertSpeakerEvent,
  sortByIdDescending,
  totalItemCount,
}) => {
  const [modal, setModal] = useState(false);

  const [toggleSpeakerFavorite] = useMutation(TOGGLE_SPEAKER_FAVORITE);

  const { cache } = useApolloClient();

  const theme = useReactiveVar(themeVar);
  const paginationData = useReactiveVar(paginationDataVar);
  const checkBoxIds = useReactiveVar(checkboxIdsVar);

  const toggle = () => {
    setModal(!modal);
  };

  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [favorite, setFavorite] = useState(false);

  const lastPage = Math.trunc((totalItemCount - 1) / paginationData.limit);

  const handleSubmit = (event) => {
    event.preventDefault();
    insertSpeakerEvent(first, last, favorite);
    setFirst("");
    setLast("");
    setFavorite(false);
    setModal(!modal);
  };

  const toolBarModalProps = {
    modal,
    toggle,
    handleSubmit,
    setFirst,
    setLast,
    setFavorite,
  };

  const handleThemeSelect = (e) => themeVar(e.target.value);

  const handleToggleFavSelected = () => {
    const cachedSpeakers = getAllSpeakersFromCache(cache);

    const checkedSpeakers = cachedSpeakers.filter((speaker) => {
      return checkBoxIds.find((checkBoxId) => checkBoxId === speaker.id);
    });

    checkedSpeakers.forEach((speaker) => {
      toggleSpeakerFavorite({
        variables: { speakerId: +speaker.id || speaker.id },
        optimisticResponse: {
          __typename: "Mutation",
          toggleSpeakerFavorite: {
            __typename: "Speaker",
            id: +speaker.id || speaker.id,
            first: speaker.first,
            last: speaker.last,
            favorite: !speaker.favorite,
          },
        },
      });
    });
  };

  return (
    <section className="toolbar">
      <div className="container">
        <ul className="toolrow">
          <li>
            <PagingOffsetLimitControl lastPage={lastPage} />
          </li>
          <li>
            <strong>Theme</strong>
            <label className="dropmenu">
              <select
                className="form-control"
                onChange={handleThemeSelect}
                value={theme}
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
            </label>
          </li>
          <li>
            <div>
              <Button color="info" onClick={toggle}>
                <span>Insert Speaker</span>
              </Button>
              &nbsp;
              <Button color="info" onClick={sortByIdDescending}>
                <span>Sort Speaker By ID Decending</span>
              </Button>
              &nbsp;
              <Button color="info" onClick={handleToggleFavSelected}>
                <span>Toogle Fav by Checked</span>
              </Button>
            </div>
          </li>
        </ul>
      </div>
      <ToolBarModal {...toolBarModalProps} />
    </section>
  );
};

export default Toolbar;
