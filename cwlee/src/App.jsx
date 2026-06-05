import { useContext, useEffect } from "react";
import { useFetch } from "./assets/hooks/useFetch";
import Post from "./components/Post";
import { ToastContext } from "./context/ToastContext";

export default function App() {
  const { loading, data, error, errorMessage } = useFetch('/posts');
  const { showToast } = useContext(ToastContext);

  useEffect(() => {
    if (!loading && !error && data.length > 0) {
      showToast("불러오기 성공!");
    }
  }, [loading, error, data]);

  useEffect(() => {
    if (error) {
      showToast(errorMessage);
    }
  }, [error, errorMessage]);

  if (loading) return <div>로딩 중...</div>;

  return (
    <div>
      <h1 className="text-center text-3xl font-bold m-8 font-rb text-blue-900">게시글 대시보드</h1>
      {data.map((post) => (
        <Post key={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  )
}
