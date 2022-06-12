// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

const findMatching =(array, names)=>{
    return array.filter(q=>{
        return q.toLowerCase()===names.toLowerCase();
    })
}
const fuzzyMatch =(array, names)=>{
    const namesLength = names.Length;
    return array.filter (q =>{
        return q.slice(0, namesLength)=== names;
    })
}
const matchName = (array, query) =>{
    return array.filter(q =>{
        return q.name === query;
    })
}