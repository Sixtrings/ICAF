import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function ShareModal(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered className="modal">
      <Container className="text-center">
        <Modal.Body>
          <Row> 
            <Col xs={12} className="text-center">
              <h4>Share</h4>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="text-center">
              <FontAwesomeIcon icon={["fab", "linkedin"]} size="3x" />
              <FontAwesomeIcon icon={["fab", "facebook"]} size="3x" />
              <FontAwesomeIcon icon={["fab", "twitter"]} size="3x" />
              <FontAwesomeIcon icon={["fab", "whatsapp"]} size="3x" />
            </Col>
          </Row>
        </Modal.Body>
      </Container>
    </Modal>
  );
}

export default ShareModal;