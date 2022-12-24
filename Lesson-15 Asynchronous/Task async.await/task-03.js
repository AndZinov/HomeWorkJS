const ALBUMS_URL = 'https://jsonplaceholder.typicode.com/album';

const dataContainer = document.querySelector('#data-container')

const toggleLoader = () => {
    const loadeerHTML = document.querySelector('#loader');
    const isHidden = loadeerHTML.hasAttribute('hidden')
    if (isHidden) {
        loadeerHTML.removeAttribute('hidden');
    } else {
        loadeerHTML.setAttribute('hidden', '');
    }
}

const renderAlbums = async () => {
    try {
        toggleLoader()
        const response = await fetch(ALBUMS_URL);
        if(!response.ok){
            throw new Error('Произошла ошибка в получении данных об альбомах...')
        }
        const albums = await response.json();
        albums.forEach((album) => {
            const liElement = document.createElement('li');
            liElement.textContent = album.title;
            dataContainer.append(liElement)
        })
        
    } catch(error){
            const liElement = document.createElement('li');
            liElement.textContent = error;
            dataContainer.append(liElement)
    } finally{
        toggleLoader()
    }
}

renderAlbums()