import React from 'react'
import { ReactDOM } from 'react';
import { render } from 'react-dom';
import Header from '../../Header/Header.jsx'
import { BrowserRouter } from 'react-router-dom';



const questions = [];

let listItems = [];
let listAnswers = [];

const inputChange = (questions, i, k, f, event) =>{
    if(k!=-1){
        questions[i][k][f]=event;
    }else{
        questions[i][0]=event;
    }
}

const addQuestion = (questions) => {
    questions.push([`Вопрос ${questions.length+1}`,["Ответ 1",0],["Ответ 2", 0],["Ответ 3", 0]]);
    listItems=[];
    let num = 0;
    for (let i=0;i<questions.length;i++) {
        listAnswers = [];
        num = 0;
        for (let k =0;k<questions[i].length;k++) {
            if(num!=0){
                listAnswers.push(<div className="form-check">
                <label>
                <input
                    type="radio"
                    name="react-tips"
                    value={questions[i][k][1]}
                    checked={false}
                    className="form-check-input"
                />
                <input name="answer" type="text" defaultValue={questions[i][k][0]} onChange={event => inputChange(questions,i,k,0,event.target.value)}></input>
                <input name="answer_score" class="input_2" type="text" defaultValue={questions[i][k][1]} onChange={event => inputChange(questions,i,k,1,event.target.value)}></input>
                <span for="answer_score">*Количество баллов за выбор ответа</span>
                </label>
                </div>);
            
            }else{
                num++;
            }
        }

        listItems.push(<div>
            <div className="AnswerSelect">
                <div className='AnswerSelectHeader'>
                    <p1><input name="question" type="text" defaultValue={questions[i][0]} onChange={event => inputChange(questions,i,-1,0,event.target.value)}></input>
                    <span for="question">*Отредактируйте вопрос, если необходимо</span></p1>
                    <button onClick={() => deleteQuestion(questions,i)}>Delete</button>
                </div>
                <form>
                    <div className="form-check">
                        {listAnswers}
                    </div>
                </form>                             
            </div>
        </div>);
    }
    render(<div><button className="firststart" onClick={() => addQuestion(questions)} >Add Question</button><div>{listItems}</div><button className="firststart" onClick={() => saveTest(questions)}>Save Test</button></div>, document.getElementById("ren"));
};

const deleteQuestion = (questions,num_L) => {
    questions.splice(num_L, 1);
    console.log({questions});
    listItems=[];
    let num = 0;
    for (let i=0;i<questions.length;i++) {
        listAnswers = [];
        num = 0;
        for (let k =0;k<questions[i].length;k++) {
            if(num!=0){
                listAnswers.push(<div className="form-check">
                <label>
                <input
                    type="radio"
                    name="react-tips"
                    value={questions[i][k][1]}
                    checked={false}
                    className="form-check-input"
                />
                <input name="answer" type="text" defaultValue={questions[i][k][0]} onChange={event => inputChange(questions,i,k,0,event.target.value)}></input>
                <input name="answer_score" class="input_2" type="text" defaultValue={questions[i][k][1]} onChange={event => inputChange(questions,i,k,1,event.target.value)}></input>
                <span for="answer_score">*Количество баллов за выбор ответа</span>
                </label>
                </div>);
            
            }else{
                num++;
            }
        }

        listItems.push(<div>
            <div className="AnswerSelect">
                <div className='AnswerSelectHeader'>
                    <p1><input name="question" type="text" defaultValue={questions[i][0]} onChange={event => inputChange(questions,i,-1,0,event.target.value)}></input>
                    <span for="question">*Отредактируйте вопрос, если необходимо</span></p1>
                    <button onClick={() => deleteQuestion(questions,i)}>Delete</button>
                </div>
                <form>
                    <div className="form-check">
                        {listAnswers}
                    </div>
                </form>                              
            </div>
        </div>);
    }
    render(<div><button className="firststart" onClick={() => addQuestion(questions)} >Add Question</button><div>{listItems}</div><button className="firststart" onClick={() => saveTest(questions)}>Save Test</button></div>, document.getElementById("ren"));
};


const saveTest = (questions) => {
    console.log(questions);
}

export const CreateTest = () => {
    const currentUrl = window.location.href;
    const currentUrl_num=currentUrl.split('?')[1];



    const TestData = {
        "id": 1,
        "testName": "Are you seek?",
        "description": "Yes",
        "questions": [
        {
            "id": 1,
            "question": "Why are you worked there",
            "subanswers": [
                {
                    "id": 1,
                    "answer": "This is me",
                    "score": 99
                },
                {
                    "id": 2,
                    "answer": "This is",
                    "score": 23
                }
            ]
        },
        {
            "id": 4,
            "question": "Is not a quest",
            "subanswers": [
                {
                    "id": 5,
                    "answer": "This is 1",
                    "score": 2
                },
                {
                    "id": 6,
                    "answer": "This is 2",
                    "score": 4
                },
                {
                    "id": 7,
                    "answer": "This is 3",
                    "score": 5
                }
            ]
        }
    ]
}
    const questions = TestData.questions.map(item => {
        const res = [item.question];
        item.subanswers.forEach(subItem => res.push([subItem.answer, subItem.score]));
        return (res);
    });
    listItems=[];
    let num = 0;
    for (let i=0;i<questions.length;i++) {
        listAnswers = [];
        num = 0;
        for (let k =0;k<questions[i].length;k++) {
            if(num!=0){
                listAnswers.push(<div className="form-check">
                <label>
                <input
                    type="radio"
                    name="react-tips"
                    value={questions[i][k][1]}
                    checked={false}
                    className="form-check-input"
                />
                <input name="answer" type="text" defaultValue={questions[i][k][0]} onChange={event => inputChange(questions,i,k,0,event.target.value)}></input>
                <input name="answer_score" class="input_2" type="text" defaultValue={questions[i][k][1]} onChange={event => inputChange(questions,i,k,1,event.target.value)}></input>
                <span for="answer_score">*Количество баллов за выбор ответа</span>
                </label>
                </div>);
            
            }else{
                num++;
            }
        }

        listItems.push(<div>
            <div className="AnswerSelect">
                <div className='AnswerSelectHeader'>
                    <p1><input name="question" type="text" defaultValue={questions[i][0]} onChange={event => inputChange(questions,i,-1,0,event.target.value)}></input>
                    <span for="question">*Отредактируйте вопрос, если необходимо</span></p1>
                    <button onClick={() => deleteQuestion(questions,i)}>Delete</button>
                </div>
                <form>
                    <div className="form-check">
                        {listAnswers}
                    </div>
                </form>                             
            </div>
        </div>);
    }
    return (
      <div className='Content'>
        <div className="Create">
            <div className="CreateHeader">
                <h1>Составь вопросы</h1>
                <div className="MainCreate">
                    <img src={'./img/createtest.jpg'} alt="" className='CreateImg'/>
                    <div className="CreateQuestions">
                        <form>
                            <p>Название</p>
                            <input type="text" className="QuestHeader" value={TestData.testName} />
                            <p>Описание</p>
                            <input type="text" className="QuestMessage" value={TestData.description} />
                        </form>
                    </div>
                    <div id="ren">
                        <button className="firststart" onClick={() => addQuestion(questions)}>Add Question</button>
                        <div>{listItems}</div>
                        <button className="firststart" onClick={() => saveTest(questions)}>Save Test</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
    
  }