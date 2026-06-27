const screen = document.querySelector(".screen")
const btn = document.querySelector("button")
const h1 = document.querySelector(".ques")
const opt = document.querySelector(".list")


const ques =[
    {
        question: "how is pm of india",
        Option: ["modi" ,"rahul","manish" ,"rajver"],
        answer: "modi"
    },
    {
        question: "what is capital rajasthan",
        Option: ["jodhapur", "pali", "dosa", "jaipur"],
        answer: "jaipur"

    }
]

h1.textContent = ques[0].question
ques[0].Option.forEach((item)=>{
const div = document.createElement("div")
 div.innerHTML= `
 <input type= "radio" value="${item}">
 <label>${item}</label>
 `
    opt.appendChild(div)
})

