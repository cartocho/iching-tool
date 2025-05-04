document.addEventListener("DOMContentLoaded", () => {
    const appDiv = document.getElementById("app");
    fetch("hexagrams.json")
        .then(response => response.json())
        .then(data => {
            appDiv.innerHTML = "<p>La herramienta está lista para funcionar.</p>";
            console.log("Hexagramas cargados:", data);
        })
        .catch(error => {
            appDiv.innerHTML = "<p>Error al cargar hexagramas.</p>";
            console.error("Error al cargar hexagramas:", error);
        });
});