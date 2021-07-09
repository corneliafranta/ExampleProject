
var keys = ['1', '2', '3', '/', '4', '5', '6', '*', '7', '8', '9', '-', '.', '0', 'CLR', '+', '=']
console.log(keys.length)
var keyboard = document.getElementById('keyboard')

var key = document.createElement('div')
key.setAttribute('class', 'key')
key.onclick = function(){
    console.log(key.id)
}
var index = 0
keys.forEach(value => {
    var newKey = key.cloneNode(true)
    newKey.innerHTML= value
    newKey.setAttribute('id', value)
    if(index === keys.length-1){
        newKey.setAttribute('class', 'key big-key')
    }
    keyboard.appendChild(newKey)
    index++
})
