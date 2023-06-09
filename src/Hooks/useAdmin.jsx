import { useContext } from "react";
import { AuthContext } from "../providers/Authprovider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useAdmin = () => {

      const { user,loading } = useContext(AuthContext);
      const [axiosSecure] = useAxiosSecure();

      const { refetch, data: isAdmin,isLoading:isAdminLoading } = useQuery({
            queryKey: ['carts', user?.email],
            enabled: !loading,
            queryFn: async () => {
                  const res = await axiosSecure(`/users/admin/${user?.email}`)
                  // console.log('res from axios', res)
                  return res.data.admin;
            },
      })
      return [isAdmin,refetch,isAdminLoading]

};

export default useAdmin;