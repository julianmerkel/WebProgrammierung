+"use strict";

import stylesheet from "./quiz.css";
import quiz from "./quiz.html";
import question from "../question.json";

class Quiz {

    constructor(app){
        this.app = app;
    }

    onShow() {

        //create Container from imported HTML
        let container = document.createElement("div");
        container.innerHTML = quiz.trim();

        let json = question;
            
        localStorage.setItem('items', JSON.stringify(json));

        // Anzuzeigende HTML-Elemente ermitteln
        let section = container.querySelector("#quiz").cloneNode(true);
        this.quiz = section.querySelector("#quiz > main  > div");
        let content = {
            className: "quiz",
            main: section.querySelectorAll("main > *"),
        };

        this.createQuiz();

        // Ergebnis zurückliefern
        return content;
        
    }

    createQuiz(){
      const data = JSON.parse(localStorage.getItem('items'));
      var frage = 0;
      var points = 0;
     
      var bild = document.createElement("Button");
      bild.setAttribute('class', 'bild');
      var question = document.createElement("TextArea");
      question.setAttribute('class', 'question');
      var answer1 =  document.createElement("Button");
      answer1.setAttribute('class', 'button1');
      var answer2 =  document.createElement("Button");
      answer2.setAttribute('class', 'button2');
      var answer3 =  document.createElement("Button");
      answer3.setAttribute('class', 'button3');
      var answer4 =  document.createElement("Button");
      answer4.setAttribute('class', 'button4');
      var r_answer = document.createElement("TextArea");
      r_answer.setAttribute('class', 'answer');
      var back = document.createElement("Button");
      back.setAttribute('class', 'buttonBack');
      var finish = document.createElement("Button");
      finish.setAttribute('class', 'finish');

      question.readOnly = true;
      r_answer.readOnly = true;
      
      question.innerHTML = data.questions[frage].question;
      answer1.innerHTML = data.questions[frage].answers[0];
      answer2.innerHTML = data.questions[frage].answers[1];
      answer3.innerHTML = data.questions[frage].answers[2];
      answer4.innerHTML = data.questions[frage].answers[3];
      r_answer.innerHTML = "Herzlich Willkommen zu unserem allgemeinen Filme-Quiz!";
      back.innerHTML = "Zurück zur Startseite";

      this.quiz.appendChild(bild);
      this.quiz.appendChild(r_answer);
      this.quiz.appendChild(question);
      this.quiz.appendChild(answer1);
      this.quiz.appendChild(answer2);
      this.quiz.appendChild(answer3);
      this.quiz.appendChild(answer4);
      this.quiz.appendChild(back);
      
      answer1.addEventListener('click', () => {
        switch (frage){
          case 0: bild.setAttribute('class', 'bild2');
          break;
          case 1: bild.setAttribute('class', 'bild3');
          break;
          case 2: bild.setAttribute('class', 'bild4');
          break;
          case 3: bild.setAttribute('class', 'bild5');
          break;
          case 4: bild.setAttribute('class', 'bild6');
          break;
          case 5: bild.setAttribute('class', 'bild7');
          break;
          case 6: bild.setAttribute('class', 'bild8');
          break;
          case 7: {
            bild.setAttribute('class', 'bild9');
            points++;
          }
          break;
          case 8: bild.setAttribute('class', 'bild10');
          break;
          case 9: {
            bild.setAttribute('class', 'bild11');
            points++;
          }
          break;
        }
        if(frage == 9){
          answer1.remove();
          answer2.remove();
          answer3.remove();
          answer4.remove();
          question.remove();
          r_answer.innerHTML = data.questions[frage].r_answer;
          finish.innerHTML = "Herzlichen Glückwunsch, Du hast alle Fragen in diesem Quiz beantwortet! Dein Score beträgt: " + points + " von 10 Punkten";
          this.quiz.appendChild(finish);
        }
        frage++;
        question.innerHTML = data.questions[frage].question;
        answer1.innerHTML = data.questions[frage].answers[0];
        answer2.innerHTML = data.questions[frage].answers[1];
        answer3.innerHTML = data.questions[frage].answers[2];
        answer4.innerHTML = data.questions[frage].answers[3];
        r_answer.innerHTML = data.questions[frage - 1].r_answer;
      })
      answer2.addEventListener('click', () => {
        switch (frage){
          case 0: bild.setAttribute('class', 'bild2');
          break;
          case 1: bild.setAttribute('class', 'bild3');
          break;
          case 2: {
            bild.setAttribute('class', 'bild4');
            points++;
          }
          break;
          case 3: bild.setAttribute('class', 'bild5');
          break;
          case 4: bild.setAttribute('class', 'bild6');
          break;
          case 5: {
            bild.setAttribute('class', 'bild7');
            points++;
          }
          break;
          case 6: bild.setAttribute('class', 'bild8');
          break;
          case 7: bild.setAttribute('class', 'bild9');
          break;
          case 8: bild.setAttribute('class', 'bild10');
          break;
          case 9: bild.setAttribute('class', 'bild11');
          break;
        }
        if(frage == 9){
          answer1.remove();
          answer2.remove();
          answer3.remove();
          answer4.remove();
          question.remove();
          r_answer.innerHTML = data.questions[frage].r_answer;
          finish.innerHTML = "Herzlichen Glückwunsch, Du hast alle Fragen in diesem Quiz beantwortet! Dein Score beträgt: " + points + " von 10 Punkten";
          this.quiz.appendChild(finish);
        }
        frage++;
        question.innerHTML = data.questions[frage].question;
        answer1.innerHTML = data.questions[frage].answers[0];
        answer2.innerHTML = data.questions[frage].answers[1];
        answer3.innerHTML = data.questions[frage].answers[2];
        answer4.innerHTML = data.questions[frage].answers[3];
        r_answer.innerHTML = data.questions[frage - 1].r_answer;
        
      })
      answer3.addEventListener('click', () => {
        switch (frage){
          case 0: bild.setAttribute('class', 'bild2');
          break;
          case 1: {
            bild.setAttribute('class', 'bild3');
            points++;
          }
          break;
          case 2: bild.setAttribute('class', 'bild4');
          break;
          case 3: {
            bild.setAttribute('class', 'bild5');
            points++;
          }
          break;
          case 4: {
            bild.setAttribute('class', 'bild6');
            points++;
          }
          break;
          case 5: bild.setAttribute('class', 'bild7');
          break;
          case 6: {
            bild.setAttribute('class', 'bild8');
            points++;
          }
          break;
          case 7: bild.setAttribute('class', 'bild9');
          break;
          case 8: bild.setAttribute('class', 'bild10');
          break;
          case 9: bild.setAttribute('class', 'bild11');
          break;
        }
        if(frage == 9){
          answer1.remove();
          answer2.remove();
          answer3.remove();
          answer4.remove();
          question.remove();
          r_answer.innerHTML = data.questions[frage].r_answer;
          finish.innerHTML = "Herzlichen Glückwunsch, Du hast alle Fragen in diesem Quiz beantwortet! Dein Score beträgt: " + points + " von 10 Punkten";
          this.quiz.appendChild(finish);
        }
        frage++;
        question.innerHTML = data.questions[frage].question;
        answer1.innerHTML = data.questions[frage].answers[0];
        answer2.innerHTML = data.questions[frage].answers[1];
        answer3.innerHTML = data.questions[frage].answers[2];
        answer4.innerHTML = data.questions[frage].answers[3];
        r_answer.innerHTML = data.questions[frage - 1].r_answer;
      })
      answer4.addEventListener('click', () => {
        switch (frage){
          case 0: {
            bild.setAttribute('class', 'bild2');
            points++;
          }
          break;
          case 1: bild.setAttribute('class', 'bild3');
          break;
          case 2: bild.setAttribute('class', 'bild4');
          break;
          case 3: bild.setAttribute('class', 'bild5');
          break;
          case 4: bild.setAttribute('class', 'bild6');
          break;
          case 5: bild.setAttribute('class', 'bild7');
          break;
          case 6: bild.setAttribute('class', 'bild8');
          break;
          case 7: bild.setAttribute('class', 'bild9');
          break;
          case 8: {
            bild.setAttribute('class', 'bild10');
            points++;
          }
          break;
          case 9: bild.setAttribute('class', 'bild11');
          break;
        }
        if(frage == 9){
          answer1.remove();
          answer2.remove();
          answer3.remove();
          answer4.remove();
          question.remove();
          r_answer.innerHTML = data.questions[frage].r_answer;
          finish.innerHTML = "Herzlichen Glückwunsch, Du hast alle Fragen in diesem Quiz beantwortet! Dein Score beträgt: " + points + " von 10 Punkten";
          this.quiz.appendChild(finish);
        }
        frage++;
        question.innerHTML = data.questions[frage].question;
        answer1.innerHTML = data.questions[frage].answers[0];
        answer2.innerHTML = data.questions[frage].answers[1];
        answer3.innerHTML = data.questions[frage].answers[2];
        answer4.innerHTML = data.questions[frage].answers[3];
        r_answer.innerHTML = data.questions[frage - 1].r_answer;
      })
      back.addEventListener('click', () => {
        window.open("#index", "_self");
      })
  }

    get title() {
        return "Quiz";
    }
}
export default Quiz;