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

const ToolBarModal = ({
  modal,
  toggle,
  handleSubmit,
  setFirst,
  setLast,
  setFavorite,
}) => {
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
            <Label for="first">Last Name</Label>{" "}
            <Input name="first" onChange={(e) => setLast(e.target.value)} />
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                onChange={(e) => setFavorite(e.target.value === "on")}
              />{" "}
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

export default ToolBarModal;
