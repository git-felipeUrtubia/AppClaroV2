
import { mostrarTodo } from "../services/findAll.js";

document.getElementById('btn-mostrar').addEventListener('click', async () => {

    const listaPersonas = await mostrarTodo();

    const tbody = document.querySelector('#table-personas tbody');
    tbody.innerHTML = '';

    listaPersonas.forEach((per, index) => {
        
        const fila = document.createElement('tr');

        fila.innerHTML = `

            <td>${String(index + 1).padStart(3, '0')}</td>
            <td>${per.nom_per}</td>
            <td>${per.ap_per}</td>
            <td>${per.rut_per}</td>
            <td>${per.emp_per}</td>
            <td>${per.patente_per ? per.patente_per : '--'}</td>
            <td>${per.id_trabajo ? per.id_trabajo : '--'}</td>
            <td>${per.entrada_per}</td>
            <td>${per.salida_per ? per.salida_per : '--'}</td>
            <td>
                <button id="btn-eliminar-fila" class="btn-eliminar-table" data-id="${per.id_per}">
                    <img class="icono-eliminar-table" src="../assets/icons/ban-outline.svg">
                </button>
            </td>

        `;
        tbody.appendChild(fila);

    });

});





