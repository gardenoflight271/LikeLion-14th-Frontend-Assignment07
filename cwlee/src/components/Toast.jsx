export const Toast = ({ message }) => {
    return (
        <div className="fixed bottom-8 bg-slate-200/50 left-1/2 -translate-x-1/2 text-black p-2 rounded-2xl">{message}</div>
    )
}