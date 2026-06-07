import { LuLoader } from "react-icons/lu";

export default function Loading() {
    return (
        <div className="flex flex-col items-center justify-center">
            <LuLoader className="text-4xl my-5" />
            <p>로딩 중...</p>
        </div>
    )
}