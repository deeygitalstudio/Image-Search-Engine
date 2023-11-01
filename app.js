const accessKey = "zPknlVcWF45xu-yqQHJoZ5fsbt9TITGNXeIqHb9aRdU";
const searchformEL = document.getElementById('search-form')
const searchEL = document.getElementById('search')
const searchresultEL = document.getElementById('search-result')
const showEL = document.getElementById('show-result')
const searchbtnEL = document.getElementById('search-btn')


let keyword = "";
let page = 1;
async function searchImages(){
    keyword = searchEL.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url)
    const data = await response.json()

    if(page === 1){
        searchresultEL.innerHTML = "";
    }

const results = data.results;

results.map((result) => {

    const image = document.createElement("img");
    image.src = result.urls.small;
    const imageLink = document.createElement('a');
    imageLink.href=result.links.html;
    imageLink.target = "_blank";


    imageLink.appendChild(image);
    searchresultEL.appendChild(imageLink)

})
    
showEL.style.display = "block"

}

searchformEL.addEventListener("submit", (e) => {
    e.preventDefault()
    page = 1;
    searchImages()
})

showEL.addEventListener("click", () => {
    page++;
    searchImages()
})



