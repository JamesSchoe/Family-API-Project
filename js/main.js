document.querySelector('button').addEventListener('click', readInput)

async function readInput(){
    const name = document.querySelector('input').value
    try{
        const response = await fetch(`https://simple-family-api-project.herokuapp.com/api/${name}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data
    }catch(error){
        console.log(error)
    }
}