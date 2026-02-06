export function DisplayWarning({ show }: { show: boolean }) {
    if (show) {
        return (
            <p className="px-4 mt-4 self-center font-xl font-semibold text-red-600">Du må velge et svaralternativ før du kan gå videre.</p>
        )
    } else {
        return (
            <p className="px-4 mt-4 self-center">&nbsp;</p>
        )
    }

}