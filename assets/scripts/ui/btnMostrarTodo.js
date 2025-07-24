import { mostrarTodo } from "../services/findAll.js";
import { btnEliminarPersona } from "./btnEliminarPersona.js";

document.getElementById('btn-mostrar').addEventListener('click', async () => {

    const listaPersonas = await mostrarTodo();
    const tbody = document.querySelector('#table-personas tbody');
    tbody.innerHTML = '';

    if (!listaPersonas || listaPersonas.length === 0) {
        alert("No se encontraron personas.");
        return;
    }

    listaPersonas.forEach((per, index) => {
        
        const botonEliminar = btnEliminarPersona();
        const fila = document.createElement('tr');
        const td = document.createElement('td');

        botonEliminar.dataset.id = per.id_per;

        botonEliminar.addEventListener('click', async () => {
            try {
                const id = botonEliminar.dataset.id;
                const response = await fetch(`http://localhost:8080/api/v1/persona/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const contentType = response.headers.get("Content-Type") || "";

                if(!response.ok) {
                    if(response.status == 404) {
                        alert('No existen personas registradas.');
                        return [];
                    }
                    throw new Error("Error al buscar personas");
                }

                if(response.ok) {

                    

                    alert(`Persona eliminada.`);
                    return;
                }

                if (contentType.includes("application/json")) {
                    return await response.json();
                } else {
                    return {};
                }

            } catch (e) {
                console.log('Error: ', e);
                return [];
            }
        });

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
        `;
        td.append(botonEliminar);
        fila.append(td);
        tbody.append(fila);
    });
    btnEliminarPersona();
});





