import { AxiosResponse } from "axios";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";

type apiAuth = (data:any)=>Promise<AxiosResponse<any,any>>
type handler = (data:any)=> void

export const useAdminAuthentication = (api:apiAuth,handler:handler)=>{
    const router = useRouter();
    return useMutation(api,{
        onSuccess:handler,
        onError:(error)=> console.log("error",error)
    })
}
 