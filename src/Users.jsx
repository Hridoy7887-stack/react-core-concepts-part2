import { use } from "react"

export default function Users({fetchUsers}) {

    const users = use(fetchUsers);
    return (
        <div className="card">
            <h3>Users: {Users.length} </h3>
        </div>
    )
}