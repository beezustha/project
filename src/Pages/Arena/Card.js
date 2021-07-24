import React from "react";


export const Card =(props) => {
  return (
   <>
    <div id="container">	
	<div class="product-details">
	<h1>{props.name}</h1>
		<p>{props.address}</p>
		<p class="information">{props.description}</p>
</div>
<div class="arena-image">
	<img src="https://sc01.alicdn.com/kf/HTB1Cic9HFXXXXbZXpXXq6xXFXXX3/200006212/HTB1Cic9HFXXXXbZXpXXq6xXFXXX3.jpg" alt="Omar Dsoky" />
</div>



</div>



  </>
  );
}

export default Card;
