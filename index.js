async function loadLayout() {
    try {
        const response = await fetch("../layout.html");
        if (!response.ok) {
            throw new Error('HTTP error!');
        }
        const htmlContent = await response.text();
        console.log(htmlContent);
        document.getElementById('layout-container').innerHTML = htmlContent;
    } 
    catch (error) {
        console.error("Error fetching layout.html:", error);
    }
}

function toggleContainer(id, display) {
    var item = document.getElementById(id);
    if (item.style.display === "none") {
        item.style.display = display;
    }
    else {
        item.style.display = "none";
    }
}



