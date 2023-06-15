function findMatching(array,names){
    const list = array.filter(item => item.toUpperCase() === names.toUpperCase())
    return list
}

function fuzzyMatch(array,letters){
    const list = array.filter(item => item.slice(0,2) === letters.slice(0,2))
    return list
}

function matchName(array,string){
    const list = array.filter(item => item.name === string)
    return list
}
