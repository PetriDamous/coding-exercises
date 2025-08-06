import { useState } from "react";
import { useMutation } from "@apollo/client";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import { ADD_SPEAKERS } from "../graphql/mutation";
import { GET_SPEAKERS } from "../graphql/query";

const SpeakerModal = (props) => {
  const { modal, setModal, toggle } = props;

  const [addSpeaker] = useMutation(ADD_SPEAKERS);
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [favorite, setFavorite] = useState(false);

  const insertSpeakerEvent = (first, last, favorite) => {
    addSpeaker({
      variables: {
        input: {
          first,
          last,
          favorite,
        },
      },
      update(cache, { data: { addSpeaker } }) {
        const { speakers } = cache.readQuery({ query: GET_SPEAKERS });

        cache.writeQuery({
          query: GET_SPEAKERS,
          data: {
            speakers: [...speakers, addSpeaker],
          },
        });
      },
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    insertSpeakerEvent(first, last, favorite);
    setFirst("");
    setLast("");
    setFavorite(false);
    setModal(!modal);
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <Form onSubmit={handleSubmit}>
        <ModalHeader toggle={toggle}>Insert Speaker Dialog</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="first">First Name</Label>{" "}
            <Input name="first" onChange={(e) => setFirst(e.target.value)} />
          </FormGroup>
          <FormGroup>
            <Label for="first">Last Name</Label>
            <Input name="first" onChange={(e) => setLast(e.target.value)} />
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                onChange={(e) => setFavorite(e.target.value === "on")}
              />
              Favorite
            </Label>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button type="submit">Save</Button>
        </ModalFooter>
      </Form>
    </Modal>
  );
};

export default SpeakerModal;
