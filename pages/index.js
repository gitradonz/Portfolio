import Header from "../components/Header";
import NextHead from "../components/NextHead";

export default function Home() {
  return (
    <>
      <NextHead />
      <Header />
      <div>
        <h1 className="h-30rem">Hello Next.js</h1>
        <h1 className="h-30rem">Hello Next.js</h1>
        <h1 className="h-30rem">Hello Next.js</h1>
        <h1 className="h-100">Hello Next.js</h1>
      </div>
    </>
  );
}
