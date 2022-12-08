import React from "react";
import Doctor from "../assets/doctor.jpg"
import {Link} from "react-router-dom"

const Card = ({ name, username, id }) => {
  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    let objetin = {
      "name":name,
      "username":username,
      "id":id
    }

    let arreglin = localStorage.getItem("favs") != null ? JSON.parse(localStorage.getItem("favs")) : [];
    arreglin.push(objetin);
    localStorage.setItem("favs",JSON.stringify(arreglin));
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <img src={Doctor} alt="imagen de doctor" />
        <Link to={'/dentist/'+id}><h4>{name}</h4></Link>
        <h5>{username}</h5>
        <p>{id}</p>
        <button onClick={addFav} className="favButton">⭐ Add fav ⭐</button>
    </div>
  );
};

export default Card;
