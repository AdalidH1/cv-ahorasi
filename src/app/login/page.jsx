import React from "react";

function Login() {
  return (
    <div>
      <form action="" className="flex justify-center content-center">
        <label htmlFor="">Usuario</label>
        <input type="text" className="block" />
        <label htmlFor="">Contraseña</label>
        <input type="password" className="block" />
      </form>
    </div>
  );
}

export default Login;
