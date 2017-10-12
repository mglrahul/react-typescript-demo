import * as React from 'react';
import { Button, Modal } from 'react-bootstrap';

class ModelFirst extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      showModal: false
    };
    console.log(props);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  close() {
    console.log("close");
    this.setState({ showModal: false });
  }

  open() {
    console.log('open');
    this.setState({ showModal: true });
  }

  render() {

    console.log(this.state);
    return (
      <div>
        <p>Click to get the full Modal experience!</p>

        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.open}
        >
          Launch demo modal
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Overflowing text to show scroll behavior</h4>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
};


export default ModelFirst
