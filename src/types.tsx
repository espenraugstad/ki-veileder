// Questions
export interface QuestionOption {
    text: string,
    points: number,
}

export interface Question {
    number: number,
    text: string,
    instruction?: string,
    bullets?: string[],
    options: QuestionOption[],
}

// Results
export type ContentBlock = 
| HeadingBlock 
| ParagraphBlock 
| ListBlock 
| LinkBlock;

export interface HeadingBlock {
    type: "heading",
    level: 1 | 2 | 3 | 4 | 5 | 6,
    text: string,
}

export interface ParagraphBlock {
    type: "paragraph",
    text: string,
}

export interface ListBlock {
    type: "list",
    style: "unordered" | "ordered",
    items: string[]
}

export interface LinkBlock {
    type: "link",
    text: string,
    url: string
}