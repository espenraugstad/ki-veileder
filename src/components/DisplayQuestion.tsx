import type { Question } from "../types";


export function DisplayQuestion({ question }: { question: Question}) {
    return (
        <div className="my-4 px-4 w-full">
            <h2 className="text-xl tracking-wide mb-2">SPØRSMÅL {question.number}</h2>
        </div>
    )
}