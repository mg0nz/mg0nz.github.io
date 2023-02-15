/* Quiz tutorial found on webdevtrick (https://webdevtrick.com) and followed/customized by developer for this project */
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function () {
    return this.questions[this.questionIndex];
};

Quiz.prototype.guess = function (answer) {
    this.answerModal(this.questionIndex);
    if (this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
    this.questionIndex++;
};

Quiz.prototype.answerModal = function (questionIndex) {
        $(".modal-title").text(questions[questionIndex].answer);
        $("#description").html(questions[questionIndex].description);
        $("#image").attr("src", questions[questionIndex].image).attr("alt", questions[questionIndex].answer);
        $(".modal-footer").text(questions[questionIndex].footer);
        $("#modal").modal("show");
    };

Quiz.prototype.isEnded = function () {
    return this.questionIndex === this.questions.length;
};

function Question(text, choices, answer, description, image, footer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
    this.description = description;
    this.image = image;
    this.footer = footer;
}

Question.prototype.isCorrectAnswer = function (choice) {
    return this.answer === choice;
};

function play() {
    if (quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for (var i = 0; i < choices.length; i++) {
            element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
        showProgress();
    }
}

// This function creates the submit onclick event while populating the score
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function () {
        quiz.guess(guess);
        play();
    };
}

/* The showProgress function shows the user what question they are currently answering 
out of the total number of questions in the game */
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Pregunta " + currentQuestionNumber + " de " + quiz.questions.length;
}

// The showScores function uses jQuery to display the scores of the quiz upon completion
function showScores() {
    var gameOverHTML = "<h1>Resultado</h1>";
    gameOverHTML += "<h2 id='score'> Tu puntuación es: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
    $("#modal").hide();
    $("div.answer-column").hide();
    $("div.col-md-6").removeClass("col-md-6").addClass("col-12");
    $("div#results").css({"width": "100vw", "height": "100vh", "overflow": "hidden", "padding-left": "0", "padding-right": "0"});
}

// The questions array is defined here
var questions = [
    new Question(
        "¿Qué famosa frase pronunció Julio César al cruzar el río Rubicón?",
        [
            "Alea iacta est (La suerte está echada)",
            "Memento mori (Recuerda que morirás)",
            "Ad astra per aspera (Hacia las estrellas a través de las dificultades)"
        ],
        "Alea iacta est",
        "César era consciente de lo que suponía atravesar el Rubicón al frente de sus tropas: una declaración de guerra. Y fue en esa ocasión, cuando pronunció una de sus frases más famosas para la historia: la suerte está echada (alea jacta est). Y esto supuso, de facto, el inicio de una guerra civil.",
        "https://lh3.googleusercontent.com/pw/AMWts8ApLAxUTsXBumPG30DVUP5w2KFxoqHfmaoypAVp-QEBezOBxWlS497-mMxr3T4OC8pEd_cT0nj8Iy1Z64yom3kUbPZ6Y6clCyTJfkkXsm6Y0e7oT_mjO7AWYcKY4AoZwMlfLkb075OiQH0oF0H_K80=w480-h360-no?authuser=0"
    ),

    new Question(
        "¿Qué emperador gobernó durante la erupción del Monte Vesubio que sepultó Pompeya y Herculano?",
        [
            "El emperador Nerón",
            "El emperador Vespasiano",
            "El emperador Tito"
        ],
        "El emperador Tito",
        "Tito gobernó el Imperio Romano del año 79 al 81 d.C., y fue el emperador en el poder durante la erupción del Monte Vesubio en el año 79 d.C. Se sabe que Tito organizó una gran campaña de ayuda para los sobrevivientes de la erupción.",
        "https://lh3.googleusercontent.com/pw/AMWts8AtxMolF4AE-gZgLFQ3cIEElihKZryRdb15T8EtUwhqccjBc8J09zWT6L350d2g4hcFH5fFaT4uZRcg94lojU-p-CGnEvZq2NvC3RbhVkopoVHJ-Bx85bGIamItlXVOj3weRBOyJDnSwawzOUiCfs7M=w480-h360-no?authuser=0"
    ),

    new Question(
        "¿Cuál es mi comida favorita?",
        [
            "Chocolatin",
            "Arroz",
            "Quesadillas"
        ],
        "Quesadillas",
        "La mejor comida, con su quesito derretido. Para toda ocasión, para todo horario.",
        "https://lh3.googleusercontent.com/pw/AMWts8Ac5irDTtamCq582nrDuy26gDFBHOya3lotMe77T5h_ll3Bju7dGId35zU77gqoRjJ99qpyI9t7wV9S6KmisHVkzpTFYGQ9zB7-Q9BMTF18Lmw463DyBU9vfZfpIEesQwwMBmGUljaNHWQtiTFuR48Y=w1258-h943-no?authuser=0"

    ),

    new Question(
        "¿Qué emperador ordenó la construcción Panteón de Agripa?",
        [
            "El emperador romano Agripa ordenó la construcción para su familia",
            "Durante el reinado del emperador Augusto",
            "El emperador Adriano"
        ],
        "El emperador Adriano",
        "Un templo para todos los dioses. El Panteón fue erigido durante el reinado del emperador Adriano (117-138) sobre los restos de un templo anterior",
        "https://lh3.googleusercontent.com/pw/AMWts8CMWl7Qx5IdCMRs1kYYucbzJWaU-UYWuea26Tw_ej8Vvz_7eCRSL31hx-KlOZc1KAoyxmvoEzFnYUOZxcQtktO8tfxUgmtbJ6IGuC7FMzMUdHrADjCMU1bW5F7-WYB0FuRu5xJh4B9AXXzBdVxvH0i1=w1258-h943-no?authuser=0"
    ),

    new Question(
        "¿Qué doctrina filosófica y espiritual se asemeja más a mis creencias y visión del mundo?",
        [
            "Agnosticismo",
            "Panteísmo",
            "Budismo"
        ],
        "Panteísmo",
        "El panteísmo no estipula a un ente como Dios, sino que la ley natural, la existencia y el universo (la suma de todo lo que fue, es y será) se representa por medio del concepto teológico de lo que las religiones llaman «Dios»",
        "https://lh3.googleusercontent.com/pw/AMWts8BkeD76QMmm6bS7QuWIUFxpByTkp9AwFuRh9hpLr1b_ufgM9qfXwSLak5DLf3GCHJ0HQF2Nt2rltNex8pfUywQr_fZVafz2fZBnT51MWvSK2oe3FOvPNsZ5unEhDvVIUX1VBgSCKy2siOlx29L8soPO=w480-h360-no?authuser=0"
    ),

    new Question(
        "Qué frase de los Simpsons me representa más?",
        [
            "Tiene todo el dinero del mundo, pero hay algo que no puede comprar… un dinosaurio",
            "Si yo me muriera, reencarnarí­a en mariposa, nadie sospecharí­a de una mariposa.",
            "Yuju, ya soy universitario. ya no necesito el diploma de la escuela secundaria. Soy intelectual, muy inteligente. Soy intelectual, muy inteligente, hay que bonito soy."
        ],
        "Si yo me muriera, reencarnarí­a en mariposa, nadie sospecharí­a de una mariposa.",
        "https://www.youtube.com/watch?v=LWMaCV6V09Y",
        "https://lh3.googleusercontent.com/pw/AMWts8Avd0ghyaINftuRtjbibUW79klt1k4GLx62mttZm6IWrtQXXhzoyU5ohsY1VD9C_keb_AJvmVznTg79yT-DsfxCjKKubw0mbClUYPirt8TTkNeR4sW8jxtCjW2rTpd7nP9vheLUw0PeffaBt6qds2_B=w1677-h943-no?authuser=0"
    ),

    new Question(
        "¿Cuál es mi signo astrológico?",
        [
            "Acuario",
            "Piscis",
            "Escorpio"
        ],
        "Acuario",
        "Turu tru",
        "https://lh3.googleusercontent.com/pw/AMWts8BWabtZEnJ_qmV1bfzEnHLNmrvrwk_9a6bA2X6XbKGy3SeYLkRotJpXuF_mMkf-Oe-rwB0WXzLBNW2z_FM_OzPo7-FNwRCbVo7BcSSBYosByzUDwrs5MLxNXs3kyRcMi9Gt2KPV1SCjfKobPjW8xP-m=w1677-h943-no?authuser=0"
    ),

    new Question(
        "¿Qué es lo que crees que me gusta más de ti?",
        [
            "Eres un laberinto que nunca deja de asombrarme",
            "Tus libros",
            "Tu Venus"
        ],
        "Eres un laberinto que nunca deja de asombrarme",
        "Tu corazón late al ritmo de los sueños más grandes y bellos. La seguridad de que contigo puedo construir un espacio lleno de amor y armonía. Cada día encuentro algo nuevo de ti que me enamora. Eres el sueño que llamo realidad.",
        "https://lh3.googleusercontent.com/pw/AMWts8D41REWhjZXVap9SdH_G5EW_41tneJcuksk9Vcd0G6nYP_1qkbOUkw0R200py_upKVfHvZTK6Hwzjy96DFcYjCrEtzWXW5RskTbvLtbE7mA6ezq34zlic4KxTxtJsx-SH9Os8_naqItunRBRgeIMBM7=w708-h943-no?authuser=0"
    )];

// create quizs
var quiz = new Quiz(questions);

// call the play function here to display quiz to users
play();
