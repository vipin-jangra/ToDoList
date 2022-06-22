import React from 'react';


const cssStyle ={ };
let curDate = new Date(2020, 5, 5, 19);
let greeting ="";

curDate = curDate.getHours();
if(curDate >= 1 && curDate < 12){
  greeting = "Good Morning";
  cssStyle.color = "green";
}else if(curDate >=12 && curDate < 19){
  greeting = "Good Afternoon";
  cssStyle.color = "Orange";
}else{
  greeting = "Good Night";
  cssStyle.color = "Black";
}

function Heading(){
    return<>
    <div>
      <h1>Hello Sir, <span style={cssStyle}>{greeting}</span> </h1>
    </div>
    </>;
}

export default Heading;