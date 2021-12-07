const qCard = document.querySelector("#question-card");
const questions = [
    {
        "id": "1",
        "question": "Why you gotta be doing all that?",
        "a": "A - It be like that",
        "b": "B - Cause I'm all that",
        "c": "C - Why you care?",
        "d": "D - I have no idea",
        "correct": "c"
    }
];

var startButton = function() {
    qCard.innerHTML = `
        <button id="start-button">Start</button>
    `;
};

var startQuiz = function() {
    qCard.innerHTML = ``;
    
    q = questions[0];
    
    qCard.innerHTML = `
    <div class="card column is-4">
        <div class="card-content">
            <div class="media-content">
              <ul>
                <li class="title is-4" id="question-number"></li>
                <li class="subtitle is-4" id="current-question">
                    
                </li>
              </ul>
            </div>
        </div>
        <div class="content" id="answer-block">
            <button id="aBtn" value="a" onClick={btnTest(this.value)}>
            
            </button>
            <button id="bBtn" value="b" onClick={btnTest(this.value)}>
            
            </button>
            <button id="cBtn" value="c" onClick={btnTest(this.value)}>
            
            </button>
            <button id="dBtn" value="d" onClick={btnTest(this.value)}>
            
            </button>
        </div>
    </div>
    `;
    document.querySelector("#question-number").textContent = "Question " + q.id;
    document.querySelector("#current-question").textContent = q.question;
    document.querySelector("#aBtn").textContent = q.a;
    document.querySelector("#bBtn").textContent = q.b;
    document.querySelector("#cBtn").textContent = q.c;
    document.querySelector("#dBtn").textContent = q.d;


    
    
};

var btnTest = function(e) {
    currentQ = document.querySelector("#current-question").textContent;

    for (i=0; i< questions.length; i++) {
        if (currentQ === questions[i].question) {
            ans = questions[i].correct;
        }
    }
    console.log(e);
    console.log(ans);

    if (e === ans) {
        qCard.innerHTML = ``;
        qCard.innerHTML = `<h1>CORRECT!</h1>`;
    } else {
        qCard.innerHTML = ``;
        qCard.innerHTML = `<h1>INCORRECT!</h1>`;
    }
}

startButton();

document.querySelector("#start-button").addEventListener("click", startQuiz);