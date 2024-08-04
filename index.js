// index.js

import { loadImagesFromFolder } from './firebase/storage.js';
import { registerUser } from './firebase/userAuth.js';

export default function loadLayout() {
	fetch("/layout.html")
		.then(response => {
			if (!response.ok) {
					throw new Error('HTTP error!');
			}
			return response.text();
		})
		.then(htmlContent => {
			console.log(htmlContent);
			document.getElementById('layout-container').innerHTML = htmlContent;
		})
		.catch(error => {
			console.error("Error fetching layout.html:", error);
		});
}

export function toggleContainer(id, display) {
    var item = document.getElementById(id);
    if (item.style.display === "none") {
        item.style.display = display;
    }
    else {
        item.style.display = "none";
    }
}

// Expose functions to the global scope

document.addEventListener("DOMContentLoaded", () => {
	//Common Functions
  	loadLayout();

	document.getElementById('registerForm').addEventListener('submit', registerUser);

  
	if (window.location.pathname === '/pages/gallery.html') {
	loadImagesFromFolder("orchids/", "ic1");
    loadImagesFromFolder("landscaping/", "ic2");
  	}

	else if (window.location.pathname === 'pages/contact.html') {
		console.log('template');
	}

	else if (window.location.pathname === 'pages/index.html') {
	}

});


