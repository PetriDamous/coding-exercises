import { useState } from "react";
import { Button } from "reactstrap";
import { ToolBarModal } from ".";
import { themeVar } from "../graphql/reactiveVars";
import { useReactiveVar } from "@apollo/client";

const Toolbar = ({ insertSpeakerEvent, sortByIdDescending }) => {
  const [modal, setModal] = useState(false);

  const theme = useReactiveVar(themeVar);

  const toggle = () => {
    setModal(!modal);
  };

  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [favorite, setFavorite] = useState(false);

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
  return (
    <section className="toolbar">
      <div className="container">
        <ul className="toolrow">
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
            </div>
          </li>
        </ul>
      </div>
      <ToolBarModal {...toolBarModalProps} />
    </section>
  );
};

export default Toolbar;
