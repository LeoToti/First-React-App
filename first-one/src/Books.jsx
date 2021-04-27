
import {Card, Button} from 'react-bootstrap'
import libri from '../src/data/scifi.json'





const Books = () => (

    
        <div className="row">
            {
    
libri.map(libro=>(<Card style={{ width: '18rem' }}>
<Card.Img variant="top" src={libro.img}/>
<Card.Body>
  <Card.Title>{libro.title}</Card.Title>
  <Card.Text>
    {libro.category}
  </Card.Text>
  <Button variant="primary">Go somewhere</Button>
</Card.Body>
</Card>
  ))


}

    </div>
)



export  default Books