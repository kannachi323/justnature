import { app } from './firebaseConfig.js'
import { getStorage, ref, getDownloadURL, listAll } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-storage.js";

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
