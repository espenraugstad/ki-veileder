import type { ChangeEvent } from "react";
import type { Question, QuestionOption } from "../types";


export function DisplayQuestion({ question, handleSelection }: { question: Question, handleSelection: (event: ChangeEvent<HTMLInputElement>) => void }) {
    return (
        <div className="my-4 px-4 w-full">
            <h2 className="text-xl tracking-wide mb-2">SPØRSMÅL {question.number}</h2>
            <p className="font-semibold my-4">{question.text}</p>
            {question.instruction ? <p className="my-4">{question.instruction}</p> : ""}
            {question.bullets ? <ul className="list-disc list-outside px-4 leading-8">{
                question.bullets.map((bullet: string) => <li key={bullet}>{bullet}</li>)
            }</ul> : ""}

            <div className="flex flex-col w-full items-start">
                {question.options.map((option: QuestionOption) => (
                    <div className="flex items-center gap-4 my-2" key={`q-${question.number}-${option.text}-${option.points}`}>
                        <input
                            id={`q-${question.number}-${option.text}`}
                            type="radio"
                            name={`q-${question.number}`}
                            value={option.points}
                            onChange={handleSelection}
                        />
                        <label htmlFor={`q-${question.number}-${option.text}`}>{option.text}</label>
                    </div>
                ))}
            </div>
        </div>
    )
}