function findMatching(array,names){
    return array.filter(item => item.toUpperCase() === names.toUpperCase())
}

function fuzzyMatch(array,letters){
    return array.filter(item => item.slice(0,2) === letters.slice(0,2))
}

function matchName(array,string){
    return array.filter(item => item.name === string)
}
