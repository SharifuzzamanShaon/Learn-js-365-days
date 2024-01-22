const data = [
    {
        name: "saimon",
        age: 45
    },
    {
        name: "karmin",
        age: 48
    },
    {
        name: "robin",
        age: 69
    }
]

const searchCB=(value)=>{
    value.name.includes("saimon")
}
console.log(searchCB(data));