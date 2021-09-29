import { useHistory } from "react-router-dom";
export default function Home() {
  let history = useHistory()
  return (
    <section id="particles" className="h-screen relative bg-black">
      <div className="absolute space-y-6 top-0 bottom-0 left-0 flex flex-col justify-center items-center right-0">
        <div className="flex h-24 text-white text-2xl items-center">
            You are an Extrovert
        </div>
        <button onClick={e => {
          history.push("/")
        }}  className="border-2 border-white text-white px-4 py-2">
          Go Home
        </button>
      </div>
    </section>
  );
}
