// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
import { getStorage, ref, getDownloadURL, listAll } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-storage.js";


const firebaseConfig = {
  apiKey: "AIzaSyCfM5BiesAiej5TtH2d9y51LCrY4UiCnt4",
  authDomain: "justnature-3c4f5.firebaseapp.com",
  projectId: "justnature-3c4f5",
  storageBucket: "justnature-3c4f5.appspot.com",
  messagingSenderId: "392155365500",
  appId: "1:392155365500:web:e3e5469a8b779ae01c49f9",
  measurementId: "G-LH0X0FGGL5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);


//Loading images from firebase storage folder
export function loadImagesFromFolder(folderPath, containerID) {
  const folderRef = ref(storage, folderPath);
  const container = document.getElementById(containerID);

  listAll(folderRef)
    .then((res) => {
      res.items.forEach((itemRef) => {
        getDownloadURL(itemRef)
          .then((url) => {
            const img = document.createElement('img');
            img.src = url;
            img.classList.add('img-item');
            container.appendChild(img);
          })
          .catch((error) => {
            console.error('Error getting download URL', error);
          });
      });
    })
    .catch((error) => {
      console.error('Error listing items in folder', error);
    });
}
