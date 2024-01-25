import Link from "next/link";

export default function StudentInfo() {
  return (
    <div>
      <p>Aivee Mae Madrelejos</p>
      <p>
        <Link
          className="hover:text-blue-500 hover:underline"
          href="https://github.com/aiveemaem"
        >
          https://github.com/aiveemaem
        </Link>
      </p>
    </div>
  );
}
