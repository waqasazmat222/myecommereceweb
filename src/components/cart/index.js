import React, {useState, useEffect} from "react";
import { ECommereceContext} from "../../context/context";
import {Card,ListGroup, Spinner} from "react-bootstrap";


const Cart =(props)=>{

    const { cart, products, getUserCart, getAllProducts } = React.useContext(ECommereceContext);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice,setTotalPrice] = useState(0);
    const [totalQuantity,setTotalQuantity] = useState(0);
  
    useEffect(()=>{
        (async ()=>{
           await getAllProducts('All');
           await getUserCart();
        })();    
    }, [])

    useEffect(()=>{
        if(!products.length || !cart.length){
            return
        }
       let cartRows =  cart.map(row => row.products);

       let cartProducts = [];
             cartRows.forEach(row=> {
             const items =  row.map(item=> item);
             cartProducts = [...cartProducts,...items];
            });

       let productIds = cartProducts.map(prd=>prd.productId);

       productIds = Array.from(new Set(productIds));

       
       let netQty = 0;
       let netPrice = 0;
       
       const formattedProducts = [].concat(...products);
      
       cartProducts =  productIds.map(pId=>{
        const found =  formattedProducts.find(prod=>prod.id === pId);
            
        const filtered =  cartProducts.filter(({productId})=> productId === pId);

        const qty = filtered.reduce((totalQty,current)=>{
            totalQty += current.quantity;    
            return totalQty;
        }, 0);

        netQty += qty;
        netPrice += qty * found?.price;
        return {
            ...found,
            quantity: qty
        }
       });

       setTotalQuantity(netQty);
            
       setTotalPrice(netPrice);

       setCartItems(cartProducts)

    }, [cart, products])

    return(
        <div className="row justify-content-center mt-5">
            <div className="col-md-6">
                <Card>
                    <Card.Header>Cart</Card.Header>
                    <ListGroup variant="flush">
                    {cartItems.map(({id, title,image,price,description, quantity})=>(
                        <ListGroup.Item key={id}>

                            <div className="d-flex">
                                <img src={image} style={{height: '50px'}} className="mr-3" />
                                <div>
                                    <span className="d-block font-weight-bold">{title}</span>
                                    <span className="mr-3">Unit Price:  {price}$</span>
                                    <span className="mr-3">Qty: {quantity}</span>
                                    <span >Total:  {price * quantity}$</span>

                                </div>
                            

                            </div>
                            </ListGroup.Item>
                                
                        ))} 
                    </ListGroup>
                    <Card.Footer>
                        <span className="mr-5">Net Price: ${totalPrice}</span>
                        <span className="">Net Qty: {totalQuantity}</span>
                    </Card.Footer>
                </Card>
            </div>
        </div>
      
    )
}
export default Cart;