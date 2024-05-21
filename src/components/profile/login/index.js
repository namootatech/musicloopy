import { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5 mb-5">
        <Col xs={12} sm={8} md={6} lg={4}>
          <h1 className="text-capitalize text-white mb-5">Welcome back!</h1>
          <Form>
            <Form.Group controlId="formEmail">
              <div className="input-group mb-5">
                <span className="input-group-text" style={{ backgroundColor: '#2D3134', borderColor: '#65D03D' }}>
                  <Image src="/envelope-icon.png" alt="Envelope Icon" width={25} height={20} />
                </span>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ backgroundColor: '#2D3134', borderColor: '#65D03D', color: '#ffffff' }}
                />
              </div>
            </Form.Group>

            <Form.Group controlId="formPassword">
              <div className="input-group mb-3 ">
                <span className="input-group-text" style={{ backgroundColor: '#2D3134', borderColor: '#65D03D' }}>
                  <Image src="/locked-icon.png" alt="Lock Icon" width={19} height={24} />
                </span>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ backgroundColor: '#2D3134', borderColor: '#65D03D', color: '#ffffff' }}
                />
              </div>
            </Form.Group>

            <div className="text-end mb-3">
              <Link href="/forgot-password" style={{textDecoration: 'none'}}>
                Forgot Password?
              </Link>
            </div>

            <Button id="login-btn" className="w-100 bg-primary-green text-black" onClick={handleLogin}>
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
