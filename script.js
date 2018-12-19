const dogUrl=[
    'https://random.dog/woof.json'
]
const generateBtn = document.querySelector("button");

var dogImage=document.querySelector("img");

var urlImage='';

function generate(){
    Promise.all(dogUrl.map(url =>{
        return fetch(url).then(resp=>resp.json())
    })).then(results =>{
        urlImage=results;
        dogImage.src=urlImage[0].url;
    }).catch(()=>console.log('error'))
}

Promise.all(dogUrl.map(url =>{
    return fetch(url).then(resp=>resp.json())
})).then(results =>{
    urlImage=results;
    dogImage.src=urlImage[0].url;
}).catch(()=>console.log('error'))


generateBtn.addEventListener("click",generate);

