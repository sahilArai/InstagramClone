import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import useShowToast from "./useShowToast";
import useAuthStore from "../store/authStore";

function useLogout() {
    const [singOut, isLoggingOut, error] = useSignOut(auth);
    const showToast = useShowToast()
    const logoutUser = useAuthStore((state) => state.logout)

    const handleLogout = async () => {
        try {
            await singOut()
            localStorage.removeItem("user-info")
            logoutUser()
        } catch (error) {
            showToast('Error', error.message, "error")
        }
    }

  return {handleLogout, isLoggingOut, error}
}

export default useLogout