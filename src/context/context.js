import React, { useState, useEffect } from "react";
import axios from "axios";
const rootUrl= `https://fakestoreapi.com/`;
const ProductsUrl=`products/`;
const userCartUrl=`carts/user/1`;
const userProfileURL=`users/1`;
const categoriesUrl=`categories`;
const ECommereceContext = React.createContext();

const ECommereceProvider = ({ children }) => {
  const [loading,isSetLoading]=useState(false);
  const [products,setProducts]=useState([]);
  const [cart,setCart]=useState([]);
  const [userProfile,setUserProfile]=useState([]);
  const [category,setCategory]=useState("All");
  const [categories,setCategories]=useState([]);
  

  const Paginate = (data) => {
    const itemsPerPage = 10
    const numberOfPages = Math.ceil(data.length / itemsPerPage)
  console.log("Number of pages");
  console.log(numberOfPages);
    const newProducts = Array.from({ length: numberOfPages }, (_, index) => {
      const start = index * itemsPerPage
      return data.slice(start, start + itemsPerPage)
    })
    return newProducts
  }

const getAllProducts = async (selectedCategory) => {

  isSetLoading(true);
  
  let url = `${rootUrl}${ProductsUrl}`;

  if(selectedCategory !== "All"){
    url= url+ `category/${selectedCategory}`;
  }

  const res = await axios.get(url);

  const data = res.data;
  const newData=Paginate(data);
  console.log(newData);
  setProducts(newData);
  isSetLoading(false);

  return res;

}
useEffect(()=>{
  getAllProducts(category);
},[category]);

const getUserCart=()=>{
  isSetLoading(true);
   return axios.get(`${rootUrl}${userCartUrl}`)
      .then(res => {
        const data = res.data;
         console.log(data);
         setCart(data);
         isSetLoading(false);
      }).catch((error)=>console.log(error));
  }

  useEffect(getUserCart,[]);
  
const getUserProfile=()=>{
  isSetLoading(true);
  axios.get(`${rootUrl}${userProfileURL}`)
      .then(res => {
        const data = res.data;
        setUserProfile(data);
        isSetLoading(false);
      }).catch(error=>console.log(error));
}
useEffect(getUserProfile,[]);


const getAllCategories=()=>{
  isSetLoading(true);
  
  axios.get(`${rootUrl}${ProductsUrl}${categoriesUrl}`)
  .then(res=>{
    const data=res.data;
    console.log(data);
    let   allCategories=["All",...data];
    setCategories(allCategories);
    isSetLoading(false);
  }).catch(error=>console.log(error));
}
useEffect(()=>{
  getAllCategories();
  getAllProducts(category);
},[]);

  return (
    <ECommereceContext.Provider
      value={{ products,cart,userProfile,category,getUserCart,getAllProducts,loading,isSetLoading ,setCategory,setProducts,categories,setCategories}}
    >
      {children}
    </ECommereceContext.Provider>
  );
};
export { ECommereceProvider, ECommereceContext  };
