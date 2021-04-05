import { Link } from 'react-router-dom';
import {Accordion, Card} from "react-bootstrap";
const Product = ({id, title,image,price,description,category}) =>{
    return (
        <div className="card" key={id}  style={{minheight:"500px", alignItems:"center" }}> 
        <Link>       
            <img src={image} className="text-center mt-3" style={{height: '200px',width: '200px', margin: '0 auto'}} alt="..." />
            </Link>
            <div className="card-body">
                <Link>
                <h5 className="card-title">{title}</h5>
                </Link>
                <div>
                    <div className="row">
                    <div className="col-auto me-auto"><h6 className="card-title">{category}</h6>
                    <p>{price}$</p>
                    </div>
                    <div className="col" style={{alignItems:"right"}}>
                        <button type="button" className="btn btn-primary btn-lg" style={{float:"right",marginTop:"4%"}}>Add to Cart</button>
                        </div>   
                    </div>
                </div>
                    
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                     Description
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>{description}</Card.Body>
                    </Accordion.Collapse>
                  </Card>
                 
                </Accordion>


            </div>
        </div>
       
    )
}

export default Product;