import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div id="about">
        <h3>About Us:</h3>
        <p>
          Home2Africa is an annual event which has taken since 2017 in Denmark .
          Home2Africa celebrates African Culture in Denmark.Music ,Fashion and Dance
        </p>
        <p>
          Intergration is a key problem for artists and their host countries.I seek to help solve this problem by promoting and publicizing events through radio,television digital or email advertising.I ensure that artists have everything they need offstage and on,from hotel rooms and sound checks.I typically create a contract outlinig thr terms of the agreement ,including fees owed to thr promoter ,date and time of rehearsals,the length of the band's performance and any other demands.
        </p>
        <p>
         With this festival we bring together Africans in Schengen irregardless of culture or ethnic background
        </p>
        <p>Funded by RedZone Entertains </p>
        <br />
      </div>

      <div id="contact">
        <br />
        <h3>Contact:</h3>
        <p>
          Melo Dada Di Series, Director
          <br />
          RedZone Entertains
          <br />
          Based in Denmark
          <br />
          Tel.: +45 40 20 69 22
          <br />
          E-mail: byabagabo@gmail.com
        </p>

        <p>
          Egzona Haxha, Co-Director
          <br />
          RedZone Entertains
          <br />
          Based in Denmark
          <br />
          Tel.: +45 60 86 32 17
          <br />
          E-mail:byabagabo@gmail.com
        </p>
        <br />
      </div>
    </div>
  );
};

export default AboutUs;

{/*


import React from "react";
import { Col, Container, Row, Footer } from "mdbreact";

class FooterPage extends React.Component {
render() {
return (
<Footer color="blue" className="font-small pt-4 mt-4">
  <Container fluid className="text-center text-md-left">
    <Row>
      <Col md="6">
      <h5 className="title">Footer Content</h5>
      <p>
        Here you can use rows and columns here to organize your footer
        content.
      </p>
      </Col>
      <Col md="6">
      <h5 className="title">Links</h5>
      <ul>
        <li className="list-unstyled">
          <a href="#!">Link 1</a>
        </li>
        <li className="list-unstyled">
          <a href="#!">Link 2</a>
        </li>
        <li className="list-unstyled">
          <a href="#!">Link 3</a>
        </li>
        <li className="list-unstyled">
          <a href="#!">Link 4</a>
        </li>
      </ul>
      </Col>
    </Row>
  </Container>
  <div className="footer-copyright text-center py-3">
    <Container fluid>
      &copy; {new Date().getFullYear()} Copyright:{" "}
      <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
    </Container>
  </div>
</Footer>
);
}
}

export default FooterPage;
*/}