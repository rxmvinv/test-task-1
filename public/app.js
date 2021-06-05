async function getContent(){
    const response = await fetch('https://5dc588200bbd050014fb8ae1.mockapi.io/assessment');
    const res = await response.json();
    console.log(res)
    const el = document.getElementById('content')
    printHTML(el, res)

}

function printHTML(el, content) {
    for (let row of content) {
        el.innerHTML += `<div><label>name:</label>${row.name}
        <label>id:</label>${row.id}
        <label>created at:</label>${row.createdAt}
        <img src="${row.avatar}"/>
        </div>`
    }

}

getContent()