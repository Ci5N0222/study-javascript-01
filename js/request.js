/**
 * AJAX : Asynchronous Javascript And XMLHttpRequest
 * 
 */

let url = 'https://codingapple1.github.io/price.json';
let method = 'get';

const respone = async(url, method, body) => {
    let result = {};
    try {
        const respone = await fetch(url, {
            headers: {"Content-Type" : "application/json"},
            method: method,
            mode: "no-cors",
            body: JSON.stringify(body)
        });
        console.log(await JSON.stringify(respone));
        // const result = await respone.json();
        // console.log(JSON.stringify(result));
        // return result;
    } catch(e) {
        console.log(`Error: ${e}`);
        return e;
    }
}

respone(url, method);