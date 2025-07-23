

export async function mostrarTodo() {
    const response = await fetch('http://localhost:8080/api/v1/persona');

    if(!response.ok) {
        throw new Error("Error al encontrar personas");
    }
    return response.json();
}






