import React, {Component,useEffect, useState} from "react";
import {

  useParams
} from "react-router-dom";
import axios from 'axios';

function Detail() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();


  const [data, setData] = useState({});

  useEffect(() => {
  	axios.get('http://localhost:8080/products/' + id).then(res =>{
			 setData(res.data);
		});

  }, [])

  return (
    <div className="Detail">
    <div className="container">
      <h1 className="title">{data.name} </h1>
      <div className="entry-divider is-divider small"></div>
       <img width="100%" height="auto" className="img-responsive" src={data.imageUrl}  alt="logo" />
      {data.description}
      </div>
    </div>
  );
}

export default Detail;