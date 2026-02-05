import resultData from "../data/results.json";

import type { Result } from "../types";

import { ContentRenderer } from "./ContentRenderer";

export function DisplayResult({ score }: { score: number }) {
    const results = resultData as { results: Result[] };

    const currentResult = results.results.find((result: Result) => result.riskLevel === score);

    if (!currentResult) return (<p className="px-4 my-4">Fant ikke resultat for score {score}.</p>)

    return (
        <ContentRenderer blocks={currentResult.blocks} />
    )
}