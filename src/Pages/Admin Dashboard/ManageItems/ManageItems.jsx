import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../components/Hooks/useMenu";
import { Button, Table } from "flowbite-react";
import { FaEdit, FaUserShield } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import useAxoisSecure from "../../../components/Hooks/useAxoisSecure";

const ManageItems = () => {
  const [menu, , refetch] = useMenu();
  const [axiosSecure] = useAxoisSecure();
  const handleDelete = (item) => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure.delete(`/menu/${item._id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
        }
      });
  };
  const handleUpdate = (item) => {
    console.log('object');
  };
  return (
    <div className="w-full">
      <SectionTitle
        subHeading={"---Hurry Up!---"}
        heading={"MANAGE ALL ITEMS"}
      ></SectionTitle>
      <Table>
        <Table.Head>
          <Table.HeadCell className="!p-4"></Table.HeadCell>
          <Table.HeadCell>ITEM IMAGE</Table.HeadCell>
          <Table.HeadCell>ITEM NAME</Table.HeadCell>
          <Table.HeadCell>PRICE</Table.HeadCell>
          <Table.HeadCell>ACTION</Table.HeadCell>
          <Table.HeadCell>Action</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {menu.map((item, index) => (
            <Table.Row
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
              key={item._id}
            >
              <Table.Cell className="!p-4">{index + 1}</Table.Cell>

              <Table.Cell>
                <img
                  className="h-[45px] w-[50px] rounded"
                  src={item.image}
                ></img>
              </Table.Cell>
              <Table.Cell>{item.name}</Table.Cell>
              <Table.Cell>{item.price}</Table.Cell>
              <Table.Cell>
                <Button
                  onClick={() => handleUpdate(item)}
                  color="warning"
                  size="xs"
                >
                  <FaEdit className="mx-auto h-6 font-light w-6 text-center"></FaEdit>
                </Button>
              </Table.Cell>
              <Table.Cell>
                <Button
                  onClick={() => handleDelete(item)}
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
  );
};

export default ManageItems;
