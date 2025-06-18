  const form = document.getElementById("form");
  const nombre = document.getElementById("name");
  const mail = document.getElementById("mail");
  const clave = document.getElementById("contraseña");
  const edad = document.getElementById("edad");
  const tel = document.getElementById("telefono");
  const dir = document.getElementById("dir");
  const ciudad = document.getElementById("ciudad");
  const cp = document.getElementById("cp");
  const dni = document.getElementById("dni");

  const msjName = document.getElementById("msjName");
  const msjMail =  document.getElementById("msjMail");
  const msjClave =  document.getElementById("msjClave");
  const msjEdad = document.getElementById("msjEdad");
  const msjTel = document.getElementById("msjTel");
  const msjDir = document.getElementById("msjDir");
  const msjCiudad = document.getElementById("msjCiudad");
  const msjCP = document.getElementById("msjCP");
  const msjDni = document.getElementById("msjDni");
  var mensajeError = "Campo invalido";

  form.addEventListener("submit", e => {
     e.preventDefault();

  var errores = "";

  if (validarName()) {
    errores += "• El nombre debe tener al menos 6 caracteres y al menos un espacio\n";
  }

  if (!validarEmail(mail.value)) {
    errores += "• Email inválido\n";
  }

  if (!validarContraseña()) {
    errores += "• Contraseña inválida (mínimo 8 caracteres, debe tener letras y números)\n";
  }

  if (!validarEdad()) {
    errores += "• Edad inválida (debe ser un número entero mayor a 18)\n";
  }

  if (!validarTel()) {
    errores += "• Teléfono inválido (debe ser un número entero de al menos 7 dígitos)\n";
  }

  if (!validarDir()) {
    errores += "• Dirección inválida (mínimo 5 caracteres, debe contener letras, números y al menos un espacio)\n";
  }

  if (!validarCiudadCP(ciudad)) {
    errores += "• Ciudad inválida\n";
  }

  if (!validarCiudadCP(cp)) {
    errores += "• Código postal inválido\n";
  }

  if (!validarDni()) {
    errores += "• DNI inválido\n";
  }


  if (errores!=null) {
    alert("Se encontraron los siguientes errores:\n\n" + errores);
  } else {
    alert(
      "Datos ingresados correctamente:\n\n" +
      "Nombre: " + nombre.value + "\n" +
      "Email: " + mail.value + "\n" +
      "Edad: " + edad.value + "\n" +
      "Teléfono: " + tel.value + "\n" +
      "Dirección: " + dir.value + "\n" +
      "Ciudad: " + ciudad.value + "\n" +
      "Código Postal: " + cp.value + "\n" +
      "DNI: " + dni.value
    );
  }
  });


  nombre.addEventListener("blur", e => {
     if (validarName())
     {
        msjName.textContent = mensajeError;
     }
     else{
      msjName.textContent="";
     }
  })
   nombre.addEventListener("focus", e=>{
    msjName.textContent="";
  })

  mail.addEventListener("blur", e => {
    if(!validarEmail(mail.value))
    {
       msjMail.textContent = mensajeError;
    }
    else{
      msjMail.textContent="";
    }
    })
    mail.addEventListener("focus", e=>{
       msjMail.textContent="";
    })

    clave.addEventListener("blur", e => {
    if(!validarContraseña())
    {
       msjClave.textContent = mensajeError;
    }
    else{
      msjClave.textContent="";
    }
    })
    clave.addEventListener("focus", e=>{
       msjClave.textContent="";
    })

    edad.addEventListener("blur", e => {
    if(!validarEdad())
    {
       msjEdad.textContent = mensajeError;
    }
    else{
      msjEdad.textContent="";
    }
    })
    edad.addEventListener("focus", e=>{
       msjEdad.textContent="";
    })

    tel.addEventListener("blur", e => {
    if(!validarTel())
    {
       msjTel.textContent = mensajeError;
    }
    else{
      msjTel.textContent="";
    }
    })
    tel.addEventListener("focus", e=>{
       msjTel.textContent="";
    })

    dir.addEventListener("blur", e => {
    if(!validarDir())
    {
       msjDir.textContent = mensajeError;
    }
    else{
      msjDir.textContent="";
    }
    })
    dir.addEventListener("focus", e=>{
       msjDir.textContent="";
    })

    ciudad.addEventListener("blur", e => {
    if(!validarCiudadCP(ciudad))
    {
       msjCiudad.textContent = mensajeError;
    }
    else{
      msjCiudad.textContent="";
    }
    })
    ciudad.addEventListener("focus", e=>{
       msjCiudad.textContent="";
    })

   cp.addEventListener("blur", e => {
    if(!validarCiudadCP(cp))
    {
       msjCP.textContent = mensajeError;
    }
    else{
      msjCP.textContent="";
    }
    })
    cp.addEventListener("focus", e=>{
       msjCP.textContent="";
    })

    dni.addEventListener("blur", e => {
    if(!validarDni())
    {
       msjDni.textContent = mensajeError;
    }
    else{
      msjDni.textContent="";
    }
    })
    dni.addEventListener("focus", e=>{
       msjDni.textContent="";
    })





function validarEmail(email) {
    // Expresión regular para validar un correo electrónico
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}
function validarName()
{
    if (nombre.value.length < 6 || !nombre.value.includes(" "))
     {
        return true;
     }
}

function validarContraseña() {
    const valor = clave.value;
    if (valor.length >= 8) {
        const regex = /(?=.*[a-zA-Z])(?=.*[0-9])/;
        return regex.test(valor);
    }
    return false; 
}

function validarEdad() {
  const valor = Number(edad.value); 
  return Number.isInteger(valor) && valor >= 18;
}

function validarTel()
{
  const valor = Number(tel.value); 
  return Number.isInteger(valor) && tel.value.length>=7;
}

function validarDir() {
  const valor = dir.value;
  const letynum = /[a-zA-Z]/.test(valor) && /[0-9]/.test(valor);
  const espacio = valor.includes(" ");
  return valor.length >= 5 && letynum && espacio;
}

function validarCiudadCP(value) {
  const valor = value.value;
  return valor.length>=3;
}

function validarDni() {
 const valor = Number(dni.value); 
  return Number.isInteger(valor) && (dni.value.length>6 && dni.value.length<9);
}

