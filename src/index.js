import React from "react";
import ReactDOM from "react-dom";
const rndImg = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    <img src={rndImg + "?grayscale"} alt="random" />

    <img
      className="food-img"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHV9KhvW3LO4M0N1PteC6tu3Hiegbf9Lsz9g&usqp=CAfood-img"
      alt="pizza"
    />
    <img
      className="food-img"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7dGQgV-CMy49OazzI0StfRGRXF6lYMOCZQZb-jh-VdXlZVfcR2kOTzeE98QJWqVZlSI4&usqp=CAU"
      alt="noodles"
    />
    <img
      className="food-img"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAlgxYxw1UOM30kQ_i2FYeeOyWqqem-gCAww&usqp=CAU"
      alt="burger"
    />
  </div>,
  document.getElementById("root")
);
