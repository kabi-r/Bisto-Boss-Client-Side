import React from "react";
import useCart from "../../../components/Hooks/useCart";
import { Button,  Table } from "flowbite-react";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
const MyCart = () => {
  const [cart, refetch] = useCart();
  // console.log(cart);
  const total = cart.reduce((sum, item) => item.price + sum, 0);

  const handleDelete = item =>{
    // console.log(item);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${item._id}`,{
          method:'DELETE'
        })
      .then(res => res.json())
      .then(data =>{
        if(data.deletedCount>0){
          refetch()
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
      }
    })
  }

  return (
    <div className="w-full py-16 px-2">
      <div className=" p-5 uppercase">
        <div className="text-3xl mb-6 font-semibold flex justify-between">
          <h2 className="">Total orders:{cart.length}</h2>
          <h2 className="">total price: ${total}</h2>
          <Button>Play</Button>
        </div>
        <div>
          <Table >
            <Table.Head>
              <Table.HeadCell className="!p-4">
              </Table.HeadCell>
              <Table.HeadCell>ITEM IMAGE</Table.HeadCell>
              <Table.HeadCell>ITEM NAME</Table.HeadCell>
              <Table.HeadCell>PRICE</Table.HeadCell>
              <Table.HeadCell>ACTION</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
                {
                    cart.map((row, index) => <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="!p-4" key={row._id}>
                      {index + 1}
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      <img src={row.image} className="h-10 w-16 rounded-md"/>
                    </Table.Cell>
                    <Table.Cell>{row.name}</Table.Cell>
                    <Table.Cell>{row.price}</Table.Cell>
                    <Table.Cell><Button onClick={()=>handleDelete(row)} color="failure" size="xs" ><MdDeleteForever className="mx-auto h-7 w-7"></MdDeleteForever></Button></Table.Cell>
                  </Table.Row>)
                }
              
            </Table.Body>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
