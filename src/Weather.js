import React from "react";
import axios from "axios";

export default function Weather (props){

    function handleResponse(response){
      alert(`The weather in ${response.data.name} ${response.data.main.temp} degrees Celsius`);  
   }
let apiKey = "9979b8bdc3d06bd98cddbd046eb5962f";
let apiUrl =   `https://api.openweathermap.org/data/2.5/weather?q=${props.city}
&appid=${apiKey}&units=metric`;
 
axios.get(apiUrl).then(handleResponse);
    return(
    <h2>Hello From Weather!! </h2>
);
}
