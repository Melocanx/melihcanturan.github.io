function toggleDetails(id) {
    const element = document.getElementById(id);
    if (element.style.display === "none" || element.style.display === "") {
        element.style.display = "block"; // Aç
    } else {
        element.style.display = "none";  // Kapat
    }
}