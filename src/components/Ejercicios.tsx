import { useState } from "react";

const Ejercicios = () => {

  // ==========================================
  // EJERCICIO 2: Sumar los elementos de un arreglo.
  // Usamos un ciclo for normal (el más fácil de entender).
  // ==========================================
  const arregloParaSumar = [10, 20, 30, 40];

  function sumarArreglo(arreglo) {
    let sumaTotal = 0;
    // El for recorre el arreglo uno por uno
    for (let i = 0; i < arreglo.length; i++) {
      // Vamos sumando cada número al total
      sumaTotal = sumaTotal + arreglo[i];
    }
    return sumaTotal;
  }

  // ==========================================
  // EJERCICIO 3: Dividir cada valor entre 5 usando .map()
  // El profesor recomendó usar map, así que lo usamos.
  // ==========================================
  const arregloOriginal = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

  // Map recorre el arreglo y crea uno nuevo con los resultados
  const arregloDividido = arregloOriginal.map(function(numero) {
    return numero / 5;
  });

  // ==========================================
  // EJERCICIO 4: Arreglo de alumnos y calcular su promedio.
  // ==========================================
  const alumnos = [
    { name: "Viviana", edad: 19, calificacion: 10 },
    { name: "Wendy", edad: 20, calificacion: 8 },
    { name: "Gerson", edad: 18, calificacion: 9 }
  ];

  function calcularPromedio(listaDeAlumnos) {
    let sumaNotas = 0;
    // Usamos otro for para recorrer los objetos
    for (let i = 0; i < listaDeAlumnos.length; i++) {
      // Sumamos solo la propiedad "calificacion" del objeto actual
      sumaNotas = sumaNotas + listaDeAlumnos[i].calificacion;
    }
    // Para el promedio, dividimos la suma entre la cantidad de alumnos
    let promedio = sumaNotas / listaDeAlumnos.length;
    return promedio;
  }

  // ==========================================
  // EJERCICIO 5: Acumulador con useState (Empieza en 5)
  // ==========================================
  // useState crea una variable que React puede actualizar sin recargar la página
  const [contador, setContador] = useState(5);

  function aumentarContador() {
    setContador(contador + 1);
  }

  function disminuirContador() {
    setContador(contador - 1);
  }

  // ==========================================
  // Esto es lo que se dibuja en el navegador (HTML)
  // ==========================================
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>🧑‍💻 Mis ejercicios prácticos</h1>

      <hr />
      <h2>2. Suma del arreglo</h2>
      <p>El arreglo es: [ {arregloParaSumar.join(", ")} ]</p>
      <p>La suma de todos es: <strong>{sumarArreglo(arregloParaSumar)}</strong></p>

      <hr />
      <h2>3. Arreglo dividido entre 5</h2>
      <p>Arreglo original: [ {arregloOriginal.join(", ")} ]</p>
      <p>Resultado dividido: <strong>[ {arregloDividido.join(", ")} ]</strong></p>

      <hr />
      <h2>4. Promedio de los alumnos</h2>
      <ul>
        <li>Viviana (19 años) - Nota: 10</li>
        <li>Wendy (20 años) - Nota: 8</li>
        <li>Gerson (18 años) - Nota: 9</li>
      </ul>
      <p>El promedio de notas es: <strong>{calcularPromedio(alumnos)}</strong></p>

      <hr />
      <h2>5. Acumulador (Empieza en 5)</h2>
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <button onClick={disminuirContador} style={{ padding: "10px 20px", fontSize: "20px", cursor: "pointer" }}>
          ➖ Disminuir
        </button>
        <span style={{ fontSize: "30px", fontWeight: "bold", border: "1px solid black", padding: "0 15px" }}>
          {contador}
        </span>
        <button onClick={aumentarContador} style={{ padding: "10px 20px", fontSize: "20px", cursor: "pointer" }}>
          ➕ Aumentar
        </button>
      </div>
    </div>
  );
};

export default Ejercicios;