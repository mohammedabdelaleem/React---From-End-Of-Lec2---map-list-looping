import React from "react";
import { useParams  } from "react-router-dom";

  export default function ProductDetails(props) {
    console.log( props)
    // console.log(props.match.params.id)

  // const prams = useParams();
    // console.log(prams)

  const {id} = useParams();


    return (
      <>  
        {/* <h1>Hello From Product <span className="text-danger"> {props.match.params.id}</span></h1> */}
        <h1>Hello From Product <span className="text-danger"> {id}</span></h1>

      </>
    );
  }
