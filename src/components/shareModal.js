import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ShareModal(props) {

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered className="modal">
      <Container>
        <Modal.Body>
          <Row className="justify-content-center"> 
            <h4>Share</h4>
          </Row>
          <Row className="justify-content-center"> 
            <div className="text-center">
              <a href="https://www.linkedin.com/sharing/share-offsite/?url=http://ashfaqishaq.com"><FontAwesomeIcon icon={["fab", "linkedin"]} size="3x" /></a>
              <p>LinkedIn</p>
            </div>
            <div className="text-center">
              <a href="https://www.facebook.com/sharer.php?u=http://ashfaqishaq.com"><FontAwesomeIcon icon={["fab", "facebook"]} size="3x" /></a>
              <p>Facebook</p>
            </div>
            <div className="text-center">
              <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" data-url="http://ashfaqishaq.com"><FontAwesomeIcon icon={["fab", "twitter"]} size="3x" /></a>
              <p>Twitter</p>
            </div>
            <div className="text-center">
              <a href="https://api.whatsapp.com/send?phone={phone_number}&text=New Book Anti-Children%20http://ashfaqishaq.com"><FontAwesomeIcon icon={["fab", "whatsapp"]} size="3x" /></a>
              <p>WhatsApp</p>
            </div>
            <div className="text-center" onClick={() => navigator.clipboard.writeText("http://ashfaqishaq.com")}>
              <FontAwesomeIcon icon={["far", "copy"]} size="3x" />
              <p>Copy Link</p>
            </div>
          </Row>
        </Modal.Body>
      </Container>
    </Modal>
  );
}

export default ShareModal;