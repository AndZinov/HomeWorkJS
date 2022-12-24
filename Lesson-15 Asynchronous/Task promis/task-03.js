const createPhotoElement = (link, title) => {
    const userElement = document.createElement('li');
    userElement.classList = 'photo-item';
    const imgElement = document.createElement('img');
    imgElement.classList = 'photo-item__image';
    imgElement.src = `${link}`;
    const h3Element = document.createElement('h3');
    h3Element.classList = 'photo-item__title';
    h3Element.textContent = title;

    userElement.append(imgElement);
    userElement.append(h3Element);

    return userElement
}



const toggleLoader = () => {
    const loadeerHTML = document.querySelector('#loader');
    const isHidden = loadeerHTML.hasAttribute('hidden')
    if (isHidden) {
        loadeerHTML.removeAttribute('hidden');
    } else {
        loadeerHTML.setAttribute('hidden', '');
    }
}

const dataContainer = document.querySelector('#data-container');

const PHOTO_URL = 'https://jsonplaceholder.typicode.com/photos'

const photoIds = [70, 42, 55];

const getUserByIds = (ids) => {
    toggleLoader();
    const request = ids.map((id) => fetch(`${PHOTO_URL}/${id}`))
    Promise.race(request)
        .then((response) => {
            return response.json();
        })
        .then((photo) => {
                const userHTML = createPhotoElement(photo.url, photo.title)
                dataContainer.append(userHTML)
        })
        .catch((error) => {
            console.error(error)
        })
        .finally(() => {
            toggleLoader()
        })
}
getUserByIds(photoIds)
