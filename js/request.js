/**
 * AJAX : Asynchronous Javascript And XMLHttpRequest
 * 
 */

let url = 'https://codingapple1.github.io/hello.txt';
let method = 'get';
const respone = async(url, method, body) => {
    console.log("ajax request");
    const respone = await fetch(url, {
        method: method,
        body: JSON.stringify(body)
    })
    console.log(JSON.stringify(respone));
}

fetch(url)
.then(res => res.json())
.then(data => {
    console.log(data);
})

// await respone(url, method);