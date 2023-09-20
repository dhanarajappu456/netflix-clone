import React from "react";
import "./Row.css";
function Row(props) {
    console.log( `row__posters ${props.isLarge && "row__poster--Large"}` )
  return (

    <div className="row">
      <h1>{props.title}</h1>
       
      <div className="row__posters">

        {props.imgList.map((img) => {
          return <img  className =  {`row__poster ${props.isLarge && "row__poster--Large"}` }  src={img.imgPort} />;
        })}
      </div>
    </div>
  );
}

export default Row;
