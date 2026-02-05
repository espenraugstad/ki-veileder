import type { ReactNode } from "react";

export function Main({ children }: { children: ReactNode }) { 
    return (
        <main className="flex flex-col py-8 items-center w-screen max-w-3xl mx-auto px-4">
            <h1 className="text-4xl font-bold w-full">KI-veileder <br /> Hvilket risikonivå er min KI-løsning?</h1>
            { children }
        </main>
    )
}