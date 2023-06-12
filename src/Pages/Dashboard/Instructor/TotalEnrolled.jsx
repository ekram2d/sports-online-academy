import { useContext } from "react";
import { AuthContext } from "../../../providers/Authprovider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const TotalEnrolled = ({ classItem }) => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  const { refetch, data: enrollData = [], isLoading: enrollDataLoading } = useQuery({
    queryKey: ["enrollData", classItem.className, classItem.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/enroll/data/${classItem?.className}/${classItem?.email}`);
      return res.data;
    },
  });

  // Access the filtered enrollments in enrollData variable and perform any necessary calculations

  return <div>Total Enrolled: {enrollData.length || 0}</div>;
};

export default TotalEnrolled;
