

import {Container, Jumbotron} from 'react-bootstrap'





const Welcome = ()  => {
    return (
        <div className="container">
        <Jumbotron fluid>
        <Container>
          <h1>Fluid LOLumbotron</h1>
          <p>
            This is a modified jumbotron that occupies the entire horizontal space of
            its parent.
          </p>
        </Container>
      </Jumbotron>
      </div>
    )
    
    }
    
    export default Welcome;