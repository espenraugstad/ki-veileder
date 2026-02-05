export function Button({ text, clickhandler }: { text: string, clickhandler: ()=>void }){
    return (
        <button onClick={clickhandler} className="bg-sky-950 text-white font-bold text-md p-4 rounded-full mt-8 hover:cursor-pointer hover:bg-emerald-600">{text}</button>
    )
}