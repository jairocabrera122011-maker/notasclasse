```javascript
const botonAnadir = document.getElementById("boton-anadir");
const botonCalcular = document.getElementById("boton-calcular");

const contenedorAsignaturas =
    document.getElementById("asignaturas");

const resultado =
    document.getElementById("resultado");


/* AÑADIR ASIGNATURA */

botonAnadir.addEventListener("click", function () {

    const nuevaAsignatura =
        document.createElement("div");

    nuevaAsignatura.className = "asignatura";

    nuevaAsignatura.innerHTML = `
        <input
            type="text"
            placeholder="Ej. Física"
        >

        <input
            type="number"
            placeholder="Nota"
            min="0"
            max="10"
            step="0.1"
        >
    `;

    contenedorAsignaturas.appendChild(nuevaAsignatura);
});


/* CALCULAR MEDIA */

botonCalcular.addEventListener("click", function () {

    const notas =
        document.querySelectorAll(
            '#asignaturas input[type="number"]'
        );

    let suma = 0;
    let cantidad = 0;

    let hayNotaIncorrecta = false;


    notas.forEach(function (campoNota) {

        if (campoNota.value !== "") {

            const nota =
                parseFloat(campoNota.value);


            if (
                isNaN(nota) ||
                nota < 0 ||
                nota > 10
            ) {

                hayNotaIncorrecta = true;

            } else {

                suma += nota;

                cantidad++;
            }
        }
    });


    /* ERROR */

    if (hayNotaIncorrecta) {

        resultado.innerHTML = `
            <div class="estado mensaje-error">
                ⚠️ Las notas deben estar entre 0 y 10.
            </div>
        `;

        resultado.className =
            "resultado visible";

        return;
    }


    /* SIN NOTAS */

    if (cantidad === 0) {

        resultado.innerHTML = `
            <div class="estado mensaje-error">
                ⚠️ Introduce al menos una nota.
            </div>
        `;

        resultado.className =
            "resultado visible";

        return;
    }


    /* MEDIA */

    const media =
        suma / cantidad;


    /* APROBADO O SUSPENSO */

    let estado;


    if (media >= 5) {

        estado = `
            <div class="estado aprobado">
                ✅ ¡Has aprobado!
            </div>
        `;

    } else {

        estado = `
            <div class="estado suspendido">
                ❌ Necesitas mejorar.
            </div>
        `;
    }


    /* MOSTRAR RESULTADO */

    resultado.innerHTML = `
        <div class="media-numero">
            ${media.toFixed(2)}
        </div>

        ${estado}
    `;

    resultado.className =
        "resultado visible";
});
```
