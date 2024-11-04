//Создаём HTML-разметку
function createHTML(data) {
  return `<div class="post">         
    <h2 class="h2">Заголовок: ${data.title}</h2><br>          
    <p class="p">Статья: ${data.body}</p>      
    </div><br>`;
}

//Добавляем разметку
function appendToContainer(posts, container) {
  posts.forEach((data) => {
    const markup = createHTML(data);
    container.innerHTML += markup;
  });
}

//Получаем и добавляем посты на страницу
async function posts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  const postsContainer = document.querySelector(".container");
  appendToContainer(posts, postsContainer);
}

posts();

/*
Воспользуемся открытым API — JSONplaceholder. От этого API можно 
получить тестовые данные: строки, данные пользователя, набор постов. 
И все они будут лишены смысла — это идеально для тренировки.

Нужно получить с сервера список постов и отобразить его на странице.
Создайте функции:
-получает на вход объект поста и возвращает строку HTML-разметки;
-добавляет полученную разметку в полученный контейнер;
-делает GET запрос по адресу https://jsonplaceholder.typicode.com/posts и 
добавит их на страницу (для этого примените метод forEach и функции 
созданные ранее).
*/
