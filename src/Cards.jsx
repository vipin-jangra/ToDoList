import React from "react";

function Card(props){
    return <>
      <div className="cards">
        <div className="card">
          <img src={props.imagesrc} alt="" className="card__image" />
          <div className="card__info">
            <span className="card__category">
              {props.sname}
            </span>
            <h3 className="card__title">{props.title}</h3>
            <a href={props.link} target="_blank">
              <button> Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </>;
  }

  export default Card;

//   ReactDom.render(
//     <>
//       {Sdata.map((val) => {
//         return (
//         <Card
//           sname={val.sname}
//           title={val.title}
//           imagesrc={val.imagesrc}
//           link = {val.link}
//           />
//         );
//       })}
      
//     </>
//     ,document.getElementById("root")
//     );