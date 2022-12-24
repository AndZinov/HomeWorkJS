const createNameElement = (username) => {
    const userElement = document.createElement('li');
    const userElementAnchor = document.createElement('a');
    userElementAnchor.href = '#';
    userElementAnchor.textContent = username;
    userElement.append(userElementAnchor);

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

const USER_URL = 'https://jsonplaceholder.typicode.com/users'

const getAllUser = () => {
    toggleLoader();
    const result = fetch(USER_URL, {
        method: 'GET',
    })

    result
        .then((response) => {
            
            if(!response.ok){
                throw new Error('Ошибка Запроса')
            }
            return response.json();
        })
        .then((users) => {
            console.log(users)
            users.forEach((user) => {
                const userHTML = createNameElement(user.username)
                dataContainer.append(userHTML)
            })
        })
        .catch((error) => {
            console.error(error)
        })
        .finally(() => {
            toggleLoader()
        })
}
getAllUser()