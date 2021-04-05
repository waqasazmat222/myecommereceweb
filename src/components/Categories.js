import React from 'react'
import { ECommereceContext } from "../context/context";

const Categories=()=>{
    const { categories,category, setCategory } = React.useContext(ECommereceContext);
  
    const handleCategories=(e)=>{
      setCategory(e);
      }
    return (
    <div className="container mt-5">  
      <div className="d-flex flex-wrap justify-content-center">
        {categories.map((item,index)=>{
          return(
                  <button  
                    key={index} 
                    type="button" 
                    className={`btn btn-outline-dark mt-2 mr-3 ${category === item? 'active': ''}`} 
                    value={item} 
                    onClick={(e)=>handleCategories(e.target.value)} >{item}
                  </button>
                )
            })}
      </div>
  </div>)
    

}
export default Categories;