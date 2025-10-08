import Link from "next/link";
export default function HomePage() {
  const clients = [
    { id: "saleh", name: "torkashvand" },
    { id: "hamed", name: "torkashvand" },
  ];

  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
            //  A Different Way Of Setting Link Hrefs
              href={{
                pathname: "/clients/[id]",
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
