function firstToLast (firstName) {
    names = {
        'Colter' : 'Ulrich',
        'Amber' : 'Abraham',
        'Cosmo' : 'Jenkins',
    }
    return names[firstName] || 'Name not found'
}

console.log(firstToLast('Glitch'))
