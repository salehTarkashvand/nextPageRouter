import { useRouter } from "next/router";

export default function clientProjectsPage() {
  const router = useRouter();
  console.log(router.query);
  function projectHandler() {
    // Navigating Programmatically
    router.push({
      pathname: "/clients/[id]/[clientProjectId]",
      query: { id: "saleh", clientProjectId: "torkashvand" },
    });
  }
  return (
    <div>
      <h1>the projects of a given client</h1>
      <button onClick={projectHandler}>load project one</button>
    </div>
  );
}
