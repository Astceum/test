import { useAuth } from "../context/AuthContext"
import NavbarAdmin from "../components/NavbarAdmin";



function NotFoundPage() {

    const { user } = useAuth()
    console.log(user)

    return (
        <div>
        <NavbarAdmin/>
        <div><h1>No Found</h1></div>
        </div>
    )
}

export default NotFoundPage