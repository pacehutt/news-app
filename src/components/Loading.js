import React from 'react'
import loading from "./loading.svg"

const Loading=()=>{
 
    return (
        <div className="container d-flex align-items-center justify-content-center"><img src={loading} alt="loading..." className="text-center"></img></div>
    )
  }

export default Loading