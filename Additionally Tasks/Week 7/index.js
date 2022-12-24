
const bodyElement = document.querySelector('body')

const createElementHTML = (body, email) => {
    const divElement = document.createElement('div');
    divElement.classList = 'post__comments';

    const divElement2 = document.createElement('div');
    divElement2.classList = 'post__comment';

    const spanElement = document.createElement('span');
    spanElement.classList = 'post-comment__author';
    spanElement.textContent = email;

    const spanElement2 = document.createElement('span');
    spanElement2.classList = 'post__comments-text';
    spanElement2.textContent = body;

    divElement.append(divElement2);
    divElement2.append(spanElement);
    divElement2.append(spanElement2);
    
    return divElement
}
const createTitle = (title,body) => {
        const divElement = document.createElement('div');
        divElement.id = 'post';
        divElement.classList = 'post';
        const h1Element = document.createElement('h1');
        h1Element.classList = 'post__title'
        h1Element.textContent = title
        divElement.append(h1Element)
        const pElement = document.createElement('p');
        pElement.classList = 'post__text';
        pElement.textContent = body;
        divElement.append(pElement)
        const bElement = document.createElement('b');
        bElement.classList = 'post__comments-text';
        bElement.textContent = 'Комментарии';
        divElement.append(bElement)

        return divElement
}

const renderPost = async (postId) => {
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        if(!response.ok){
            throw new Error('Ошибка получения данных')
        }
        const dataResponse = await response.json();
        const {title, body} = dataResponse;
        const titleHTML = createTitle(title,body);
        bodyElement.append(titleHTML)
        const postTitle = document.querySelector('.post')
        const comment = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        if(!comment.ok){
            throw new Error('Ошибка получения комментариев')
        }
        const commentResponse = await comment.json();
        commentResponse.forEach(({body,email}) => {
            const divElement = createElementHTML(body, email)
            postTitle.append(divElement);
        })
    } catch(error){
        console.error(error)
    }
   
}

renderPost(1)