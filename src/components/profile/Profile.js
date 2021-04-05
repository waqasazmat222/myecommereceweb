import React, { useState,useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { ECommereceContext } from "../../context/context";

const Profile=()=>{
    const { userProfile } = React.useContext(ECommereceContext);
    const [isEditing,setIsEditing]=useState(false);
    const [userForm,setUserForm] = useState({});

    useEffect(()=>{
      const data = JSON.parse(JSON.stringify(userProfile));
      setUserForm(data)
    },[userProfile])

const handleSave=()=>{
    console.log("userForm");
    console.log(userForm);
    setIsEditing(false);
////////////////////////////////////////////
fetch(`https://fakestoreapi.com/users/${userForm.id}`,{
            method:"PUT",
            body:JSON.stringify(userForm)
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
/////////////////////////////////////////////////
}
    const handleChange = (event)=>{
      event.preventDefault();
      
      const controlName = event.target.name;
      const value = event.target.value;
    
      if(controlName.includes('name.') || controlName.includes('address.') ){
        
        const parent = controlName.split('.')[0];
        const name = controlName.split('.')[1];
        userForm[parent][name] = value;

      } else{
        userForm[event.target.name] = value
      }
      setUserForm(Object.assign({},userForm) )
    }

    if(!userProfile){
      return <p>No user found</p>
    }
    else{
      console.log(userProfile);
      const {id,email,username,password,name,address,phone}=userForm;
      return <Container>
      <form className="row g-3 mt-5" style={{paddingLeft: '10%', paddingRight: '10%'}}>

      <div className="col-md-6">
        <label for="UserId" className="form-label">UserName</label>
        <input type="text" name="username" onChange={handleChange} className="form-control" disabled={!isEditing} value={username} />
      </div>
      <div className="col-md-6">
        <label for="firstName" className="form-label">First Name</label>
        <input type="text"  name="name.firstname" onChange={handleChange} className="form-control" disabled={!isEditing} value={name?.firstname}/>
      </div>
      <div className="col-md-6">
        <label for="lastName" className="form-label">Last Name</label>
        <input type="text" name="name.lastname" onChange={handleChange} className="form-control"  disabled={!isEditing} value={name?.lastname}/>
      </div>
      
      <div className="col-md-6">
        <label for="inputEmail4" className="form-label">Email</label>
        <input type="email" name="email" onChange={handleChange} className="form-control" disabled={!isEditing} value={email} id="inputEmail4" />
      </div>
      <div className="col-md-6">
        <label for="inputEmail4" className="form-label">Phone</label>
        <input type="text" name="phone" onChange={handleChange} className="form-control" disabled={!isEditing} value={phone} id="inputEmail4" />
      </div>
      <div className="col-md-6">
        <label for="inputPassword4" className="form-label">Password</label>
        <input type="password" name="password" onChange={handleChange} className="form-control" id="inputPassword4" disabled={!isEditing} value={password} />
      </div>
      <div className="col-2">
        <label for="inputAddress" className="form-label">Number</label>
        <input type="text" name="address.number" onChange={handleChange} className="form-control" id="inputAddress" disabled={!isEditing} value={address?.number} />
      </div>
      <div className="col-10">
        <label for="inputAddress" className="form-label">Street</label>
        <input type="text" name="address.street" onChange={handleChange} className="form-control" id="inputAddress" disabled={!isEditing} value={address?.street} />
      </div>
      <div className="col-md-6">
        <label for="inputCity" className="form-label">City</label>
        <input type="text" name="address.city" onChange={handleChange} className="form-control" id="inputCity" disabled={!isEditing} value={address?.city} />
      </div>
      <div className="col-md-2">
        <label for="inputZip" className="form-label">Zip</label>
        <input type="text" name="address.zipcode" onChange={handleChange} className="form-control" id="inputZip" disabled={!isEditing} value={address?.zipcode}/>
      </div>
    
      <div className="col-12">
        {!isEditing && <button type="button" className="btn btn-primary mt-3"  onClick={()=> setIsEditing(true)}>Edit</button>}

      {isEditing && (
      <>
        <button type="button" className="btn btn-primary mt-3 mr-2"  onClick={handleSave}>Save</button>
        <button type="button" className="btn btn-primary mt-3"  onClick={()=> setIsEditing(false)}>Cancel</button>
      </>)}
      </div>
    </form>
    </Container>
  }
}

export default Profile;