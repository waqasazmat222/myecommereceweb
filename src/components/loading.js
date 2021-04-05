import React from 'react'
import { Spinner } from 'react-bootstrap';

const Loading =()=>{

    return (
        <div
        className="d-flex align-items-center justify-content-center" 
        style={{
            position:'absolute',
            top:0,
            left:0,
            bottom:0,
            right:0, 
            background: '#000000b0',
            zIndex: 2}}>

             <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </div>)
}
export default Loading;