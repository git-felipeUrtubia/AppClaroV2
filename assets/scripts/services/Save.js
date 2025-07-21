
document.getElementById('btn-guardar').addEventListener('click', () => {

    const persona = {

        nom_per: document.getElementById('input-nombre').value.trim(),
        ap_per: document.getElementById('input-apellido').value.trim(),
        rut_per: document.getElementById('input-rut').value.trim(),
        emp_per: document.getElementById('input-empresa').value.trim(),
        patente_per: document.getElementById('input-patente').value.trim(),
        id_trabajo: document.getElementById('input-id-trabajo').value.trim(),
        entrada_per: document.getElementById('input-entrada').value.trim(),
        salida_per: null

    }
    const verificarCampos = ['nom_per', 'ap_per', 'rut_per', 'emp_per', 'entrada_per'];
    for(const campo of verificarCampos) {
        if(persona[campo] == "" || persona[campo] == null) {
            console.log(`El campo "${campo}" esta vacio`)
            alert("Por favor, complete todos los campos obligatorios.");
            return; 
        }
    }

    fetch('http://localhost:8080/api/v1/persona', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(persona)
    })
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(data => {
        alert('Persona guardada correctamente!!')
    })
    .catch(err => {
        console.log('Error al guardar: ', err);
        alert('Ocurrio un error');
    })


});





