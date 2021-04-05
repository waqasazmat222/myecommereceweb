import React, {useEffect,useState} from 'react'
import { ECommereceContext } from "../context/context";
import Product from  "./Product"
const Home =()=>{
    const { products } = React.useContext(ECommereceContext);
    const [noOfPages, setNoOfPages] = useState(0);
    const [activePage, setActivePage] = useState(1);

    useEffect(()=>{
      setNoOfPages(products.length);
    });

   const renderPageNo = () => {
     const pagesButtons = [];

     for(let count=1; count<= noOfPages; count++){
      pagesButtons.push(
        <li className={`page-item ${activePage === count ? 'active': ''}`} onClick={()=>setActivePage(count)}>
          <a className="page-link">{count}</a>
        </li>
      )
     }

     return pagesButtons;
   }

    return(
        <>
        {/* <Profile ></Profile> */}
        <div className="container">
          <div className="row">
            {products.length > 0 && products[activePage-1].map((product)=>(
              <div className="col-sm col-md-4 mt-3" >
                <Product  {...product} />
              </div>)
            )}
          </div>
          <nav aria-label="Page navigation example">
            <ul className="pagination mt-4 d-flex flex-wrap justify-content-center">
              <li className={`page-item ${activePage === 1 ? 'disabled': ''}`} 
                  onClick={()=> activePage !== 1 && setActivePage(activePage - 1)}>
                <a className="page-link" >Previous</a></li>

              {renderPageNo()}
             
              <li className={`page-item ${activePage === products.length ? 'disabled': ''}`}
                  onClick={()=> activePage !== products.length && setActivePage(activePage + 1)}>
                    <a className="page-link">Next</a>
              </li>
            </ul>
          </nav>
        </div>     
        </>
      );
}
export default Home;

const styles = {
    article: {
      height: "200px",
      borderRadius: "50%",
      width:"200px",
    },
    image:{
        height:"150px",
        width:"200px",
    }
  };