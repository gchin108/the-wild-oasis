import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login as loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";


export function useLogin(){
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const { mutate: login, isLoading } = useMutation({
      //mutationFn is set to a function that takes an object with email and password properties, and it calls the loginApi function with these parameters
      mutationFn: ({ email, password }) => loginApi({ email, password }),
      onSuccess: (user) => {
        // console.log(user.user)
        queryClient.setQueryData(["user"], user.user); //cache user data upon login, so it can be used when relogin
        navigate("/dashboard", { replace: true });
      },
      onError: (err) => {
        console.log("ERROR", err);
        toast.error("Provided email or password is incorrect");
      },
    });
    return { login, isLoading}
}