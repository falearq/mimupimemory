function shuffle(array){

    const _array = array.slice(0)
    
    for(let i=0; i < array.length - 1; i++){
        let randomIndex = Math.floor(Math.random()*( i + 1 ))
        let temp = _array[i]
        _array[i] = _array[randomIndex]
        _array[randomIndex] = temp
    }
    return _array
}
export default function initializeDeck(){
    let id = 0
    const cards = ["par1","par2","par3","par4","par5", "par6","par7","par8"
].reduce((acc,type)  => { 
    acc.push({
        id: id++,
        type
    })
    acc.push({
        id: id++,
        type
    })
    console.log(acc)
    return acc
},[])

return shuffle(cards)

}