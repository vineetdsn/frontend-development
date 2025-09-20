function badahoja(str){

    let tenyears = str.toUpperCase()
    return tenyears
}

// console.log(badahoja("abcdef"))

asurPandcard = {
    asurAge: 99,
    pancard: "iushdhf",
    thisWala: function(str){

        console.log("ye method he")
        return str.toLowerCase()
    }
}

let sahikar = 
console.log(asurPandcard.pancard)
// console.log(sahikar)

console.log(badahoja(asurPandcard.pancard))
console.log(asurPandcard.thisWala("KL"))
// console.log(badahoja(asurPandcard.pancard))

function show() {
  console.log(this);
}
show()
