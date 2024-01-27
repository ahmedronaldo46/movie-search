let input = document.getElementById('input')
const autobar = document.querySelector("#autobar")
const fetchData = async (SearchTerm) => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params:{
            apikey: '3254839c',
            s: SearchTerm
        }
    });
    const datas = response.data.Search

    getMovie(datas)
};
fetchData()
input.addEventListener('input', (event) =>{
    input.addEventListener('keypress', function(e){
        console.log(e.charCode)
    })
        autobar.innerText = ''
    fetchData(event.target.value)
    getMovie()
})

const getMovie = (data) => {
    if (!data) {
        return
    }
    for (let movie of data){
        let box = document.createElement("div")
        let text = document.createElement("p")
        let img = document.createElement("img")
        text.innerText = movie.Title
        movie.Poster === 'N/A' ? '' : img.src = movie.Poster;
        box.appendChild(img)
        box.appendChild(text)
        autobar.appendChild(box)
        box.classList.add('fix')
        // console.log(movie.Poster)
    }
}

document.addEventListener('click', event =>{
    if (autobar.contains(event.target)){
        autobar.classList.add('hide')
    }
})