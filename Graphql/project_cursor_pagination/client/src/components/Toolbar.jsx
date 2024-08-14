import { useState } from "react";
import { Button } from "reactstrap";
import { currentThemeVar } from "../graphql/useApollo";
import SpeakerModal from "./SpeakerModal";
import PagingOffsetLimitControl from "./PagingOffsetLimitControl";

const Toolbar = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  const currentTheme = currentThemeVar();

  const themeBtnName = currentTheme === "dark" ? "Dark" : "Light";

  const handleTheme = () => {
    const currentTheme = currentThemeVar();

    const updatedTheme = currentTheme === "dark" ? "light" : "dark";

    currentThemeVar(updatedTheme);
  };

  return (
    <section className="toolbar">
      <div className="container">
        <ul className="toolrow">
          <li>
            <Button color="info" onClick={handleTheme}>
              {themeBtnName}
            </Button>
          </li>
          <li>
            <div>
              <Button color="info" onClick={toggle}>
                <span>Insert Speaker</span>
              </Button>
              <SpeakerModal modal={modal} setModal={setModal} toggle={toggle} />
            </div>
          </li>
          <li>
            <PagingOffsetLimitControl />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Toolbar;
