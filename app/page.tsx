import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center pt-36">
      <h1>Welcome to my APp</h1>
      <Link href="/todo-app">
        <button className="text-blue-600 bf-white rounded-md px-2 py1 mt-6">
          Get started
        </button>
      </Link>
    </main>
  );
}
