// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//     })
//     .catch(error => {
//         console.log(error)
//     })
const getDb = 'db.json'
const sendDb = 'https://jsonplaceholder.typicode.com/posts'

const getData = (url) => {
    return fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log('данные db', data)
            return data
        })
        .catch(error => {
            console.log('ошибка', error)
        })
};

const sendData = (url, data) => {
    return fetch(url, {
        method: 'POST',
        body: data,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log('данные сервера', data);
            return data
        })
        .catch(error => {
            console.log('ошибка', error)
        })
};

getData(getDb)
    .then(data => sendData(sendDb, JSON.stringify(data)))
    .then(data => {
        console.log('ok', data)
    })
    .catch(error => {
        console.log('ошибка', error)
    });
