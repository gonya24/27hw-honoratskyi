function generateList(array) {
    const ul = document.createElement('ul')
    for (let i = 0; i < array.length; i++) {
        const li = document.createElement('li')
        if (Array.isArray(array[i])) {
            li.appendChild(generateList(array[i]))
            ul.appendChild(li)
        } else {
            li.innerHTML = array[i]
            ul.appendChild(li)
        }

    }
    return ul
}


const arr = [1, 2, [1, 2, 3], 4];
document.body.prepend(generateList(arr));
