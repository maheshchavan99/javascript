const url = 'https://jsonplaceholder.typicode.com/posts'

async function fetchPOst() {
    try {
        const response =  fetch(url);
        const data = await response.json()
        console.log(data);
    } catch (err) {
        console.log(err);
    } finally {
        console.log('hello');
        console.log('finally block');
    }
}