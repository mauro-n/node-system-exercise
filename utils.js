function list(arr) {
    arr.forEach(el => console.log(el.name))
}

function add(people, arr) {
    arr.push(people)
    return arr
}

function remove(name, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].name === name) {
            arr.splice(i, 1)
        }
    }
}

function edit(people, arr) {
    arr.map(el => el.name === people.name ? people : el)
    return arr
}

function find(name, arr) {
    const result = arr.find(el => el.name.includes(name))
    return result || "Não foi encontrado"
}

module.exports = {
    add, edit, find, list, remove
}