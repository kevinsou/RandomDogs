const dog={
    url=''
};

generateDog(){
    fetch('https://random.dog/woof.json')
        .then(response=>{return response.json();})
        .then(result=>{console.log(response)})
}

