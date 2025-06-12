import { useState } from "react";
import { Button } from "reactstrap";
import { ToolBarModal } from ".";

const Toolbar = ({ insertSpeakerEvent, sortByIdDescending }) => {
  const [modal, setModal] = useState(false);

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

  return (
    <section className="toolbar">
      <div className="container">
        <ul className="toolrow">
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
