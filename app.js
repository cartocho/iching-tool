document.addEventListener("DOMContentLoaded", () => {
    const appDiv = document.getElementById("app");

    // Datos de los hexagramas (directamente en el archivo para evitar problemas con JSON)
    const hexagrams = [
        {
            id: 1,
            name: "El Creativo",
            description: "Cielo puro y creativo."
        },
        {
            id: 2,
            name: "Lo Receptivo",
            description: "Tierra pura y receptiva."
        }
    ];

    // Mostrar los hexagramas en la página
    hexagrams.forEach(hexagram => {
        const hexagramDiv = document.createElement("div");
        hexagramDiv.innerHTML = `<h2>${hexagram.name}</h2><p>${hexagram.description}</p>`;
        appDiv.appendChild(hexagramDiv);
    });
});