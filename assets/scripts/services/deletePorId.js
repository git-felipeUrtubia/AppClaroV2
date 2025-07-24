

export async function eliminarPorId(id) {

    const response = await fetch(`http://localhost:8080/api/v1/persona/${id}`);

    if(!response.ok) {
        throw new Error("Error al eliminar persona");
    }
    return (await response).json();
}


 




