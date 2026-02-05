import { createElement } from "react";
import type { ContentBlock, HeadingBlock } from "../types";

function renderHeading(block: HeadingBlock, index: number) {
    let classes = "";

    if (block.level === 1) {
        classes = "text-3xl font-bold mt-6 mb-4";
    } else if (block.level === 2) {
        classes = "text-2xl font-bold mt-6 mb-4";
    } else if (block.level === 3) {
        classes = "text-xl font-bold mt-6 mb-4"
    } else {
        classes = "text-lg font-bold mt-6 mb-4"
    }

    return createElement(`h${block.level}`, { className: classes, key: index }, block.text);
}

export function ContentRenderer({ blocks }: { blocks: ContentBlock[] }) {
    return (
        <>
            {blocks.map((block: ContentBlock, index: number) => {
                switch (block.type) {
                    case "heading":
                        return renderHeading(block, index);

                    case "paragraph":
                        return <p key={index} className="my-4">{block.text}</p>

                    case "list":
                        if (block.style === "unordered") {
                            return (
                                <ul key={index} className="list-disc mx-4">{block.items.map((listItem: string) => <li key={listItem}>{listItem}</li>)}</ul>
                            )
                        } else {
                            return (
                                <ol key={index} className="list-disc mx-4">{block.items.map((listItem: string) => <li key={listItem}>{listItem}</li>)}</ol>
                            )
                        }


                    case "link":
                        return (
                            <div key={index}>
                                <p className="mt-4">{block.text}</p>
                                <a href={block.url} className="underline">{block.url}</a>
                            </div>
                        )

                    default:
                        return <p key={index}>Fant ikke blokktypen.</p>
                }
            })}
        </>
    )
}