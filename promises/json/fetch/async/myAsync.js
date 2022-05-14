const url = 'https://jsonplaceholder.typicode.com/posts'
const myAsync=async()=>{
    try{
const response= await fetch(url)
const data=await response.json()
console.log(data)
    }
    
     catch(err){
        console.log(err)
    }
  
}
myAsync()