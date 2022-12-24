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

const userIds = [5, 6, 2, 1];

const getUserByIds = (ids) => {
    toggleLoader();
    const request = ids.map((id) => fetch(`${USER_URL}/${id}`))
    console.log(request)
    Promise.all(request)
        .then((responses) => {
            
            const dataResults = responses.map((response) => response.json())
            return Promise.all(dataResults);
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
getUserByIds(userIds)

//Решение от школы
const getUsersByIds = (userIds) => {
    toggleLoader();
    Promise.all(userIds.map((id) => fetch(`${USERS_URL}/${id}`)))
      .then((responses) => {
        return Promise.all(
          responses
            .filter((response) => response.ok)
            .map((response) => response.json())
        );
      })
      .then((users) => {
        console.log("users", users);
        const usersArray = Array.isArray(users) ? users : Object.values(users);
        usersArray.forEach((user) => {
          const todoHTMLElement = createUserElement(user.name);
          usersContainer.append(todoHTMLElement);
        });
      })
      .catch((error) => {
        console.error("error", error);
      })
      .finally(() => {
        toggleLoader();
      });
  };
  
  getUsersByIds([5, 6, 2, 1]);