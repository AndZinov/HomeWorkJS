const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';


const getTodosByIds = async (ids) => {
    try{
        const requests = await ids.map((id) => fetch(`${TODOS_URL}/${id}`));
        const allRequests = await Promise.all(requests)
        allRequests.forEach((response) => {
            if(!response.ok){
                throw new Error('Ошибка в получении данных о пользователях')
            }
        })
        const response = await allRequests.map((data) => data.json());
        const newResponse = await Promise.all(response)
        console.log(newResponse)
    } catch(error){
        console.log('error', error);
    }
}
getTodosByIds([43, 21, 55, 100, 10]);