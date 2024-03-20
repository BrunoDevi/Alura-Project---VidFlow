const videosContainer = document.querySelector('.videos__container')

const API = fetch("http://localhost:3000/videos")
.then(res => res.json())
.then((videos)=>
    videos.forEach((video)=>{
        videosContainer.innerHTML += `
        <li class="videos__item">
            <iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
            <div class="descricao-video">
                <img class="img-canal" src="${video.imagem}" alt="logo do canal">
                <h3 class="titulo-video">${video.titulo}</h3>
                <p class="titulo-canal">${video.descricao}</p>
            </div>
        </li>
        `;
    })
)
.catch(error => {
    videosContainer.innerHTML = `<li>Houve um ERROR ao carregar a Pagina. error -> ${error} </li>`;
})
