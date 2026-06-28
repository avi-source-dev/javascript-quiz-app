const screen = document.querySelector(".screen")
const nextBtn = document.querySelector("button")
const h1 = document.querySelector(".ques")
const opt = document.querySelector(".option")
const submitBtn = document.querySelector(".ans")

const ques = [
  {
    question: "1. What does HTML stand for?",
    Option: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Transfer Markup Language",
      "Home Tool Markup Language"
    ],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "2. Which language is used for web page interactivity?",
    Option: ["CSS", "JavaScript", "Python", "Java"],
    answer: "JavaScript"
  },
  {
    question: "3. Which language is used for styling?",
    Option: ["JavaScript", "CSS", "Python", "Java"],
    answer: "CSS"
  },
  {
    question: "4. Which HTML tag is used to create a hyperlink?",
    Option: [   "Double slash",
    "Hash",
    "HTML comment",
    "Slash asterisk asterisk slash"],
    answer: "Slash asterisk asterisk slash"
  },
  {
    question: "5. Which CSS property is used to change the text color?",
    Option: ["font-color", "text-color", "color", "background-color"],
    answer: "color"
  },
  {
    question: "6. Which method is used to print output in the browser console?",
    Option: ["console.log()", "print()", "echo()", "document.write()"],
    answer: "console.log()"
  },
  {
    question: "7. Which symbol is used for comments in JavaScript?",
    Option: ["<!-- -->", "//", "#", "/* */"],
    answer: "//"
  },
  {
    question: "8. Which company developed JavaScript?",
    Option: ["Microsoft", "Netscape", "Google", "Apple"],
    answer: "Netscape"
  },
  {
    question: "9. Which keyword is used to declare a constant in JavaScript?",
    Option: ["var", "let", "const", "static"],
    answer: "const"
  },
  {
    question: "10. Which HTML tag is used to insert an image?",
    Option: ["image", "img", "src", "picture"],
    answer: "img"
  }
];


let count = 0

 nextBtn.addEventListener("click" , function(){
     count++
 handler()
 })
  

function handler(){
    if(count>=ques.length){
        count=0
    }
    
    h1.textContent = ques[count].question
    opt.innerHTML= ""
ques[count].Option.forEach((item)=>{
const div = document.createElement("div")

 div.innerHTML= `
 <input type= "radio" value="${item}" name ="${ques[count].answer}" >
 <label>${item}</label>
 `
    opt.appendChild(div)
})
 
    
}

handler()

submitBtn.addEventListener("click", function(){

    const selected = document.querySelector(`input[name="${ques[count].answer}"]:checked`);
   if(selected.value === ques[count].answer ){
selected.parentElement.style.backgroundColor = "green";
    
   }else{
    selected.parentElement.style.backgroundColor = "red";
       
   }

})

