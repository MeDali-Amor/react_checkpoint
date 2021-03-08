
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
function App() {
  return (
    <div className="App">

        <div className="login_container">
          <h3 className="title">Welcome</h3>
          <div className="input">
          <Form>
            <Form.Group >
              <Form.Label>Email</Form.Label>
              <Form.Control type="email"/>
            </Form.Group>
            </Form>
          </div>
          <div className="input">
          <Form>
          <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password"/>
            </Form.Group>
            </Form>
          </div>
              <Button className="btn" type="submit">
                Login
              </Button>
          
          
        </div>
      
    </div>
  );
}

export default App;
