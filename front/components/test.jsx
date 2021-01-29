import React, { Component } from 'react'
import Router from 'next/router';


class ResultBtn extends Component {
    render() {
        return (
            <>
            <button type="button" onClick={() => Router.push('/result')} >
                Результат
            </button>
            </>
       ); 
    }
}

class NextBtn extends Component {
    render() {
        return (
            <>
            <button type="button" onClick={() => Router.push('/result')} >
                Next
            </button>
            </>
       ); 
    }
}

class Quiz extends Component {
    constructor(props) {
        super(props);

        this.state = {
            questionCounter: 1,
            questionId: 1, 
            question: ["1st q", "2st q", "3st q"][0],
            answerOptions: [],
            allQuestions: ["1st q", "2st q", "3st q"],
            answer: '',
            result: 0
        }
        this.onIncrement = this.onIncrement.bind(this);
        this.nextQuestion = this.nextQuestion.bind(this);
        this.answerSelected = this.answerSelected.bind(this);
    };
    
    onIncrement() {
        let n = this.state.questionCounter + 1; 
        this.setState({
            questionCounter: n
        })
        this.nextQuestion(this)
    }

    nextQuestion() {
        let n = this.state.questionCounter;
        let q = this.state.allQuestions[n];
        this.setState({
            question: q
        }) 
    }

    answerSelected() {
        return 1;
    }

// todo
//      проподать кнопки до выбора варианта  (hidden="true")
    render() {
        return (
            <>
                <div className="quiz-body">
                    <div className="quiz-counter">
                        {this.state.questionCounter} / {this.state.allQuestions.length}
                    </div>                
                    <div className="quiz-question">
                        {this.state.question}
                    </div>
                    <div className="quiz-answer">
                        здесть находятся вопросы
                        <ul>
                          {[1,2,3,4].map((el) => (
                            <li>{el}</li>
                          ))}
                        </ul>
                    </div>
                    <div className="next-btn" >
                        {this.state.questionCounter < this.state.allQuestions.length && this.answerSelected ? <button onClick={this.onIncrement}>Дальше</button> : <div></div>}

                        {this.state.questionCounter == this.state.allQuestions.length ? <ResultBtn/> : <div></div>}
                    </div>
                </div>
            </>
        )
    }
}


export default class Test extends Component {
    render() {
        return (
            <div className="root">
                <div className="back-container">
                    <div className="container">
                        <Quiz/>
                    </div>
                </div>
            </div>
        );
    }
}