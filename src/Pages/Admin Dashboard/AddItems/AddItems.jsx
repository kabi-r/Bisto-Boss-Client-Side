import {
  Button,
  FileInput,
  Label,
  Select,
  TextInput,
  Textarea,
} from "flowbite-react";
import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxoisSecure from "../../../components/Hooks/useAxoisSecure";
import Swal from "sweetalert2";

const image_token = import.meta.env.VITE_IMGBb_KEY
const AddItems = () => {
  const [axiosSecure] = useAxoisSecure()
  const {register,handleSubmit,formState: { errors }, reset} = useForm();
  const image_hosting_url = `https://api.imgbb.com/1/upload?expiration=600&key=${image_token}`
  const onSubmit = data => {
    // console.log(data)
    const formData = new FormData()
    formData.append('image', data.image[0]);

    fetch(image_hosting_url,{
      method:'POST',
      body: formData
    })
    .then(res => res.json())
    .then(imageResponse => {
      // console.log(imageResponse);
      if(imageResponse.success){
        const imageUrl = imageResponse.data.display_url
        // console.log(data);
        const {name, price, recipe, image} = data;
        const newItem = {name, price:parseFloat(price), recipe, image:imageUrl}
        // console.log(newItem);
        axiosSecure.post('/menu', newItem)
        .then(data =>{
          console.log('posting client side',data);
          if(data.data.insertedId){
            reset()
            Swal.fire(
              'YAHHHH!',
              'Items Successfully!',
              'success'
            )
          }
        })
      }
    })
  };
  return (
    <div className="w-full mx-auto px-16">
      <SectionTitle
        heading={"ADD AN ITEM"}
        subHeading={"---What's new?---"}
      ></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-2 block">
          <Label htmlFor="recipeName" value="Recipe name*" />
        </div>
        <TextInput id="recipeName" name="name" {...register('name', { required: true })} placeholder="Recipe name" required type="text" />

        <div className="flex gap-6 mt-4">
          <div className=" w-full" id="select">
            <div className="mb-2 block">
              <Label htmlFor="Category" value="Category*" />
            </div>
            <Select id="Category" name="category"  {...register('category', { required: true })} required>
              <option>Pizza</option>
              <option>Soup</option>
              <option>Salad</option>
              <option>Germany</option>
            </Select>
          </div>
          <div className="w-full">
            <div className="mb-2 block">
              <Label htmlFor="text" value="Price*" />
            </div>
            <TextInput id="text" name="price" {...register('price', { required: true })} placeholder="Price" required type="text" />
          </div>
        </div>
        <div className="" id="textarea">
          <div className="mb-2 block">
            <Label htmlFor="comment" value="Recipe Details*" />
          </div>
          <Textarea
            id="comment"
            name="recipe"
            {...register('recipe', { required: true })}
            placeholder="Recipe Details..."
            required
            rows={4}
          />
        </div>
        <div className="max-w-md my-2" id="fileUpload">
          <FileInput id="file" {...register('image', { required: true })} />
        </div>
        <Button type="submit">Add Items</Button>
      </form>
    </div>
  );
};

export default AddItems;
