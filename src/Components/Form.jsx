import React from "react";
import { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [name,setName] = useState("");
  const [mail,setMail] = useState("");
  const [message,setMessage] = useState("");

  const handleChange = (e) =>{
    e.target.name === "name" ? setName(e.target.value) : setMail(e.target.value);
  }

  const emailValidation = (e) =>{
    e.preventDefault();
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9*-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g
    if(regEx.test(mail) && name.length >= 5){
      setMessage(`Gracias ${name}, te contactaremos cuando antes vía mail`)
    }
    else{
      setMessage("Por favor verifique su información nuevamente");
    }
  }

  return (
    <div>
      <form>
        <label htmlFor="name">
          <input type="text" placeholder="Nombre" id="name" name="name" onChange={handleChange}/>
        </label>
        <label htmlFor="email">
          <input type="email" placeholder="Correo Electronico" id="email" name="email" onChange={handleChange}/>
        </label>
        <button onClick={emailValidation}>Enviar</button>
      </form>
      <h3>{message}</h3>
    </div>
  );
};

export default Form;
