import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../providers/Authprovider';

const UpdateClass = ({classItem}) => {

         console.log(classItem);  
      //      const { register, handleSubmit, reset } = useForm();
       const {user} =useContext(AuthContext)
       const { register, handleSubmit, reset } = useForm();

       const onSubmit = data => {
        
           console.log(data);
      

      };
      return (
       <>
        up
       </>
      );
};

export default UpdateClass;