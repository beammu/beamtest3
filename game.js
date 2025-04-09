const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice'));

let currentquestion = {} ;
let acceptinganswers = true;
let score = 0 ;
let questioncounter = 0 ;
let availablequestions = [] ;

let questions = [
    {
        question: "What should she eat?" ,
        A: "vegie",
        B: "Let her pick whatever she want",
        image:"images/cook.png",
        answer: 2
    },
    {
        question: "Now she's getting bored. What should she do?" ,
        A: "It's games time!!!!",
        B: "Study for sure",
        image: "images/bored.png",
        answer: 1
    },
    {
        question: "She's asking u what's her fav color." ,
        A: "urm purple i guess??",
        B: "it more than 1 color",
        image: "images/fav.png",
        answer: 2
    },
    {
        question: "it her birthday. You gotta buy her a present." ,
        A: "Chiikawa plushie",
        B: "valorant gift card",
        image: "images/bd.png",
        answer: 1
    },
    {
        question: "Last question do you love her?" ,
        A: "Yes but not in that way she's only 17.",
        B: "No how can i love that stinky kid.",
        image: "images/love.png",
        answer: 1
    },]

    const correctbonus = 1;
    const maxquestion = 5;

const questionImage = document.getElementById('question-image'); 
const updateQuestionImage = (imagePath) => {
    questionImage.src = imagePath;};

startgame = () => {
    questioncounter = 0;
    score =0;
    availablequestions = [...questions];
    getnewquestion();
};

getnewquestion = () => {
    if (questioncounter >= maxquestion) { 
        return window.location.assign(`end.html?score=${score}`);
    }

    currentquestion = availablequestions[questioncounter];  
    question.innerText = currentquestion.question; 
    updateQuestionImage(currentquestion.image);

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentquestion[number === '1' ? 'A' : 'B'];  
    });

    questioncounter++;  
    acceptinganswers = true;
    
};

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptinganswers) return;
        acceptinganswers = false;
        
        const selectedchoice = e.target;
        const selectedanswer = selectedchoice.dataset["number"];
        
        if (selectedanswer == currentquestion.answer) {
            score++;
        }
        
        console.log(`Q${questioncounter}: Selected ${selectedanswer}, Score: ${score}`);
        
        setTimeout(getnewquestion, 300);
    });
});  

startgame();