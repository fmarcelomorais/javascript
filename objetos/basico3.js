function produto(){
    console.log(this)
}

const p1 = new produto()
console.log(typeof p1)
