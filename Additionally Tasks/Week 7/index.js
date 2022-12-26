
const bodyElement = document.querySelector('body')

const createElementHTML = (body, email) => {
    
    const divElement2 = document.createElement('div');
    divElement2.classList = 'post__comment';

    const spanElement = document.createElement('span');
    spanElement.classList = 'post-comment__author';
    spanElement.textContent = email;

    const spanElement2 = document.createElement('span');
    spanElement2.classList = 'post__comments-text';
    spanElement2.textContent = body;

    
    divElement2.append(spanElement, spanElement2);
    
    return divElement2
}
const createTitle = (title,body) => {
        const divElement = document.createElement('div');
        divElement.id = 'post';
        divElement.classList = 'post';
        const h1Element = document.createElement('h1');
        h1Element.classList = 'post__title'
        h1Element.textContent = title
       
        const pElement = document.createElement('p');
        pElement.classList = 'post__text';
        pElement.textContent = body;
        const bElement = document.createElement('b');
        bElement.classList = 'post__comments-text';
        bElement.textContent = 'Комментарии';

        const divElements = document.createElement('div');
        divElements.classList = 'post__comments';

        divElement.append(h1Element, pElement, bElement, divElements)


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
        const postTitle = document.querySelector('.post__comments')
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


//Решение от школы

/*
const createComment = (author, text) => {
  const comment = document.createElement("div");
  comment.className = "post-comment";

  const commentAuthor = document.createElement("span");
  commentAuthor.className = "post-comment__author";
  commentAuthor.innerText = author;

  const commentText = document.createElement("span");
  commentText.className = "post-comment__text";
  commentText.innerText = text;

  comment.append(commentAuthor, commentText);

  return comment;
};

const createPost = (postName, text, comments) => {
  const post = document.createElement("div");
  post.id = "post";
  post.className = "post";

  const postTitle = document.createElement("h1");
  postTitle.className = "post__title";
  postTitle.innerText = postName;

  const postText = document.createElement("p");
  postText.className = "post__text";
  postText.innerText = text;

  const commentsText = document.createElement("b");
  commentsText.className = "post__comments-text";
  commentsText.innerText = "Комментарии";

  const commentsBlock = document.createElement("div");
  commentsBlock.className = "post__comments";

  comments.forEach((comment) => {
    const commentHTML = createComment(comment.email, comment.body);
    commentsBlock.append(commentHTML);
  });

  post.append(postTitle, postText, commentsText, commentsBlock);

  return post;
};

const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";
const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

const renderPost = (postId) => {
  fetch(`${POSTS_URL}/${postId}`)
    .then((response) => response.json())
    .then((post) => {
      fetch(`${COMMENTS_URL}?postId=${post.id}`)
        .then((response) => response.json())
        .then((comments) => {
          const postHTML = createPost(post.title, post.body, comments);
          document.body.append(postHTML);
        })
        .catch((error) => {
          console.error(error);
        });
    })
    .catch((error) => {
      console.error(error);
    });
};

renderPost(1);

*/ 