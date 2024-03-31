const questions=[
    {
        'que':'Which of the folllowing is a markup language',
        'a':'HTML',
        'b':'CSS',
        'c':"javaScript",
        'd':'PHP',
        'correct':'a'
    },
    {
        'que':'What year was javaScript was launched',
        'a':'1996',
        'b':'1995',
        'c':"1994",
        'd':'None of these',
        'correct':'b'
    },
    {
        'que':'What does CSS stands for',
        'a':'hypertext markup language',
        'b':'cascading style sheet',
        'c':"jason object notation",
        'd':'cascading standard sheet',
        'correct':'b'
    },
    {
        'que': "Which of the following is a client site language?",
        'a': "Java",
        'b': "C",
        'c': "Python",
        'd': "JavaScript",
        'correct': 'd',
    }
    

]
let index=0;
let total =questions.length;
let correct=0;
 let incorrect=0;

const quesBox=document.getElementById('quesBox');
const optionInputs=document.querySelectorAll('.options')
const loadQuestion=()=>{
    if(index===total){
        return endQuiz();
    }
    reset();
const data=questions[index];
console.log(data);
quesBox.innerText=`${index+1}) ${data.que}`;
optionInputs[0].nextElementSibling.innerText=data.a;
optionInputs[1].nextElementSibling.innerText=data.b;
optionInputs[2].nextElementSibling.innerText=data.c;
optionInputs[3].nextElementSibling.innerText=data.d;


}
const submitQuiz=()=>{
    const data=questions[index];
const answer=getAnswer();
if(answer===data.correct){
correct++
}
else{
    incorrect++;
}
index++;
loadQuestion();
return;
}
const getAnswer=()=>{
    let ans;
    optionInputs.forEach((input)=>{
        if(input.checked){
            ans= input.value;
        
            
        }
    
        
    })
    return ans;
}

const reset=()=>{
    optionInputs.forEach((input)=>{
        
            input.checked=false;
    }
    )
}

const endQuiz=()=>{
    document.getElementById('box').innerHTML=`
    <div style="text-align:center">
    <h3>Finished!Thank You</h3>
    <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
    </div>
    `
}

loadQuestion();