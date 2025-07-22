


document.getElementById('btn-buscar-por-rut').addEventListener('click', () => {

    const rut_per = document.getElementById('input-rut').value.trim();
    fetch(`http://localhost:8080/api/v1/persona/${rut_per}`)
    .then(res => res.json())
    .then(data => {

        const tbody = document.querySelector('#table-personas tbody');
        tbody.innerHTML = '';

        const fila = document.createElement('tr');

        fila.innerHTML = `
        
            <td>001</td>
            <td>${data.nom_per}</td>
            <td>${data.ap_per}</td>
            <td>${data.rut_per}</td>
            <td>${data.emp_per}</td>
            <td>${data.patente_per ? data.patente_per : '--'}</td>
            <td>${data.id_trabajo ? data.id_trabajo : '--'}</td>
            <td>${data.entrada_per}</td>
            <td>${data.salida_per ? data.salida_per : '--'}</td>
        `;
        tbody.appendChild(fila);
    })
    .catch(err => {
        console.log("Error, rut no encontrado: ", err);
    });

});





