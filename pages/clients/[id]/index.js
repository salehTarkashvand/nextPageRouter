import { useRouter } from "next/router";

export default function clientProjectsPage() {
    const router = useRouter()
    console.log(router.query);
    
    return (
        <div>
            <h1>
                the projects of a given client
            </h1>
        </div>
    );
}