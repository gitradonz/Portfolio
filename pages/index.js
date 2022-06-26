import Header from "../components/Header";
import NextHead from "../components/NextHead";

export default function Home() {
  return (
    <>
      <NextHead />
      <Header />
      <div>
        <div className="h-30rem flex justify-content-center">Hello Next.js</div>
        <h1 className="h-30rem flex justify-content-center bg-yellow-50">
          Hello Next.js
        </h1>
        <h1 className="h-30rem">Hello Next.js</h1>
        <h1 className="h-100">Hello Next.js</h1>
      </div>
    </>
  );
}
