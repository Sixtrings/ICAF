import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function ShareModal(props) {

  const [copied, setCopied] = useState(null);
  
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
              <a href="https://www.linkedin.com/sharing/share-offsite/?url=http://ashfaqishaq.com"><FontAwesomeIcon icon={["fab", "linkedin"]} size="3x" /></a>
              <a href="https://www.facebook.com/sharer.php?u=http://ashfaqishaq.com"><FontAwesomeIcon icon={["fab", "facebook"]} size="3x" /></a>
              <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" data-url="http://ashfaqishaq.com"><FontAwesomeIcon icon={["fab", "twitter"]} size="3x" /></a>
              <a href="https://api.whatsapp.com/send?phone={phone_number}&text=New Book Anti-Children%20http://ashfaqishaq.com"><FontAwesomeIcon icon={["fab", "whatsapp"]} size="3x" /></a>
              <p className="text-left">Page Link: {copied}</p>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="http://ashfaqishaq.com"
                  aria-label="http://ashfaqishaq.com"
                />
                <InputGroup.Append>
                  <Button onClick={() => {navigator.clipboard.writeText("http://ashfaqishaq.com"); setCopied('link copied!')}}><FontAwesomeIcon icon={["far", "copy"]} size="lg" /></Button>
                </InputGroup.Append>
              </InputGroup>
            </Col>
          </Row>
        </Modal.Body>
      </Container>
    </Modal>
  );
}

export default ShareModal;