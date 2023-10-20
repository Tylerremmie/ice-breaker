import React, { FunctionComponent, useCallback, useEffect, useState } from 'react';

import questions from './files/questions';

import './iceBreakerQuestions.css';

const IceBreakerQuestion: FunctionComponent = () => {
    const [pickedQuestion, setQuestion] = useState('Click to create a question.');

    useEffect(() => {
        if (localStorage.getItem("questions") === null) {
            localStorage.setItem("questions", JSON.stringify(questions));
        }
    }, []);

    const handleGenerateQuestion = useCallback(() => {
        const storageQuestions: string[] = JSON.parse(localStorage.getItem("questions")!);
        const randomQuestion = storageQuestions[Math.floor(Math.random() * storageQuestions.length)];
        setQuestion(randomQuestion);

        const newQuestions = storageQuestions.filter(question => question !== randomQuestion);
        localStorage.setItem("questions", JSON.stringify(newQuestions));
    }, []);

    return (<div className='question-text' onClick={handleGenerateQuestion}>{pickedQuestion}</div>);
}

export default IceBreakerQuestion;