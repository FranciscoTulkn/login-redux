import React from "react";
import { useSelector, useDispatch} from "react-redux";
import Logo from "../assets/react.svg";
import "../assets/css/Login.css"

const Login = () => {

  const { identificacion, correo, token } = useSelector((state) => state);
  const dispatch = useDispatch();

  const enviarForm = async (e) => {
    e.preventDefault();

    dispatch({ type: "SET_TOKEN", payload: '1020736603' });
  }

  return(
    <div className="login-container">
      <form onSubmit={enviarForm} className="login-form">
        <img src={Logo} alt="React" />
        <input 
          type="number"
          placeholder="Ingrese su identificación"
          value={identificacion}
          onChange={(e) => dispatch({ type: "SET_IDENTIFICACION", payload: e.target.value })
          }
        />
        <input 
          type="email"
          placeholder="Ingrese su correo electrónico"
          value={correo}
          onChange={(e) => dispatch({ type: "SET_CORREO", payload: e.target.value })
          }
        />
        <button type="summit">
          Iniciar sesión
        </button>
      </form>
    </div>
  )
}

export default Login;