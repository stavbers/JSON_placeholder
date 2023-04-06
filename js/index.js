// /posts/1/comments
// /albums/1/photos
// /users/1/albums
// /users/1/todos
// /users/1/posts
// console.log(document.querySelectorAll('.app-wrp__list').dataset.id)


function fetchDataPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => addElDOM(data))
}
function fetchDataPhotos() {
  fetch('https://jsonplaceholder.typicode.com/photos')
  .then(response => response.json())
  .then(data => addImgToDOM(data))
}
function addElDOM(data){
  data.forEach(element => {
    document.querySelector('.app-wrp').innerHTML += createElDOM(element)
  });
}

function addImgToDOM(data){
  document.querySelectorAll('.app-wrp__img').forEach((imgBlock, imgIndex) => {
    data.forEach((element, elementIndex) => {
      if(element.id < 201){
        if(imgIndex == elementIndex) {
          imgBlock.innerHTML = `<img src="${element.thumbnailUrl}" loading="lazy">`
        }
      }
    });
  })
}

function createElDOM(element){
    return (
      `<li class="app-wrp__list" data-id = ${element.id}>
          <h2 class="app-wrp__title">${element.title}</h2>
          <div class="app-wrp__img"></div>
          <p class="app-wrp__desr">${upFstChar(element.body)}</p>
      </li>`
    )
}

function upFstChar(char){
   return char[0].toUpperCase() + char.slice(1)
}

fetchDataPosts()
fetchDataPhotos()
