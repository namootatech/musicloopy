import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <Container className="mx-auto max-w-screen-xl p-4 py-6 lg:py-8">
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <Row className="sm:flex sm:items-center sm:justify-between">
          <Col className="text-sm text-gray-500 sm:text-center dark:text-gray-400">&copy; 2023 <a href="#" style={{textDecoration: "none"}}>Music Loopy<sup>TM</sup></a>. All Rights Reserved.</Col>
          <Col className="flex mt-4 sm:justify-center sm:mt-0">
            {/* <a href="https://www.facebook.com/MusicLoopy" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <img src="facebook.png" alt="FACEBOOK"/>
            </a>
            <a href="https://www.tiktok.com/@musicloopy?_t=8l8h21APK0O&_r=1" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <img src="tiktok.png" alt="TIKTOK"/>
            </a>
            <a href="https://www.youtube.com/channel/UCH6s5L14P90QLMQSkYNGEXA" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <img src="youtube.png" alt="YOUTUBE"/>
            </a>
            <a href="https://www.instagram.com/musicloopy?igsh=MWczZG04MDZnMzhheA%3D%3D&utm_source=qr" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <img src="instagram.png" alt="INSTAGRAM"/>
            </a>
            <a href="https://www.linkedin.com/company/musicloopy/?" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <img src="linkedin.png" alt="LINKEDIN"/>
            </a> */}
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
