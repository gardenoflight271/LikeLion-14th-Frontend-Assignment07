export default function Post({ title, body }) {
    return (
        <div className="flex items-center justify-center">
            <div className="bg-blue-50 rounded-lg shadow-xl shadow-slate-200 m-5 p-6 w-10/12 max-w-160 font-bn hover:scale-105">
                <div className="border-b border-gray-300 pb-4 text-blue-900 text-xl">
                    <h2 className="font-bold">{title}</h2>
                </div>
                <p className="text-slate-700">{body}</p>
            </div>
        </div>
    )
}