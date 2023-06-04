import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Button, Table } from "flowbite-react";
import { MdDeleteForever } from "react-icons/md";
import { FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxoisSecure from "../../../components/Hooks/useAxoisSecure";

const AllUsers = () => {
  const [axiosSecure] = useAxoisSecure()
  const { refetch, data: users = [] } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });
  const handleDelete = () => {};
  const handleMakeAdmin = (user) =>{
    fetch(`http://localhost:5000/users/admin/${user._id}`,{
        method:'PATCH'
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data);
        if(data.modifiedCount){
            refetch()
            Swal.fire("Yahh!", "Successfully Login!", "success");
        }
    })
  }

  return (
    <div className="w-full px-5 py-2 mt-5">
      <h3 className="text-4xl font-semibold mb-5">Total users: {users.length}</h3>
      <div>
        <Table>
          <Table.Head>
            <Table.HeadCell className="!p-4"></Table.HeadCell>
            <Table.HeadCell>NAME</Table.HeadCell>
            <Table.HeadCell>Email</Table.HeadCell>
            <Table.HeadCell>Roll</Table.HeadCell>
            <Table.HeadCell>Action</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {users.map((user, index) => (
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={user._id}>
                <Table.Cell className="!p-4" >
                  {index + 1}
                </Table.Cell>

                <Table.Cell>{user.name}</Table.Cell>
                <Table.Cell>{user.email}</Table.Cell>
                <Table.Cell>
                    {
                        user.role === 'admin' ? 'admin' :
                        <Button
                   onClick={()=>{handleMakeAdmin(user)}}
                    color="warning"
                    size="xs"
                  >
                    <FaUserShield className="mx-auto h-7 w-7"></FaUserShield>
                  </Button>
                    }
                </Table.Cell>
                <Table.Cell>
                  <Button
                    onClick={() => handleDelete(user)}
                    color="failure"
                    size="xs"
                  >
                    <MdDeleteForever className="mx-auto h-7 w-7"></MdDeleteForever>
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default AllUsers;
