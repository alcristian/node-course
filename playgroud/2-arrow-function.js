// const square = function(x){
//     return x*x
// }

// const square = (x) => {
//     return x*x
// }

// const square = (x) => x * x

// console.log(square(7))

// const event = {
//     name: 'Birthday party',
//     printGuesList: function(){
//         console.log('Guest list ' + this.name)
//     }
// }

const event = {
    name: 'Birthday party',
    GuestList:['Cristian','Alessandra','Eu Eu Eu '],
    printGuesList() {
        console.log('Guest list ' + this.name)
        this.GuestList.forEach( (x)=>{
            console.log(x + ' is attending '+ this.name)
        })
    }
}

event.printGuesList()