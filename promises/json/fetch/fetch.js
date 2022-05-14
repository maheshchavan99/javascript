4const url = "https://jsonplaceholder.typicode.com/posts"
const fetchPost = () => {
    fetch(url).then((response) => {
        console.log(response)
        return response.json()
    }).then((data) => {
        console.log(data);

        let postData = '<ul>'
        data.map((post) => {
            postData += `<li>${post.title}</li>`
        })

        postData += '</ul>'

        const divElement = document.getElementById('users')
        divElement.innerHTML = postData
        console.log(postData);
    }).catch(err => {
        console.log(err);
        console.error(err.message);
    })
}
fetchPost()

function savePost() {
    const post = {
        userID: 100,
        title: 'javascript end',
        body: 'javascript'
    }
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
            'content-type': 'application/json'
        }
    }).then((response) => {
        console.log(response);
        return response.json()
    }).then(data => {
        console.log('add data', data);
    })
}