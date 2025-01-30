import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            Copyright &copy; New Asafo Market
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
