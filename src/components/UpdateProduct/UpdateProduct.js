import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData, useNavigate } from 'react-router-dom';




const UpdateProduct = () => {
    const navigate = useNavigate();
    const { _id, category, name,
        seller,
        price,
        stock,
        ratings, ratingsCount,
        img,
        shipping } = useLoaderData();



    const { register, formState: { errors }, handleSubmit } = useForm();

    const handelUpdateProduct = (data) => {

        //console.log(data);

        fetch(`https://ema-john-simple-server-module-59.vercel.app/allproducts/${_id}`, {

            method: 'PUT', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)


        }).then((res) => res.json()).then((data) => {
            console.log(data);
            if (data.acknowledged) {
                alert('Successfully-Update');
                navigate('/allproduct');
            }
        }).catch((error) => {
            console.error(error.message);
        })


    }

    /*
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    
    
    */
    return (
        <div className='h-[1100px] flex justify-center items-center mt-10'>
            <div className='w-[510px] p-7 card card-compact bg-base-100 shadow-xl'>
                <h1 className='text-3xl text-center font-bold text-red-400'>Update-Product</h1>
                <div className="card-body">
                    <form onSubmit={handleSubmit(handelUpdateProduct)}>
                        <div className="form-control  w-full max-w-lg">
                            <label htmlFor="category">Category</label>
                            <input type='text' name='category' defaultValue={category} {...register('category', { required: "category is required" })} placeholder='CategoryName' className="input input-bordered w-full max-w-xl" />
                            {errors.category && <p role="alert">{errors.category?.message}</p>}
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label htmlFor="name">Name</label>
                            <input type='text' name='name' defaultValue={name} {...register('name', { required: "Product Name is required" })} placeholder='Product Name' className="input input-bordered w-full max-w-xl" />
                            {errors.name && <p role="alert">{errors.name?.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label htmlFor="seller">Seller</label>
                            <input type='text' name='seller' defaultValue={seller} {...register('seller', { required: "Company  Name is required" })} placeholder='Company Name' className="input input-bordered w-full max-w-xl" />
                            {errors.seller && <p role="alert">{errors.seller?.message}</p>}
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label htmlFor="price">Price</label>
                            <input type='text' name='price' defaultValue={price} {...register('price', { required: "price is required" })} placeholder='Price' className="input input-bordered w-full max-w-xl" />
                            {errors.price && <p role="alert">{errors.price?.message}</p>}
                        </div>



                        <div className="form-control w-full max-w-xs">
                            <label htmlFor="stock">Stock</label>
                            <input type='text' name='stock' defaultValue={stock} {...register('stock', { required: "stock is required" })} placeholder='Stock' className="input input-bordered w-full max-w-xl" />
                            {errors.stock && <p role="alert">{errors.stock?.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label htmlFor="rating">Ratings</label>
                            <input type='text' name='ratings' defaultValue={ratings} {...register('ratings', { required: "ratings is required" })} placeholder='Ratings' className="input input-bordered w-full max-w-xl" />
                            {errors.ratings && <p role="alert">{errors.ratings?.message}</p>}
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label htmlFor="ratingsCount">Ratings Count</label>
                            <input type='text' name='ratingsCount' defaultValue={ratingsCount} {...register('ratingsCount', { required: "ratingsCount is required" })} placeholder='Ratings Count' className="input input-bordered w-full max-w-xl" />
                            {errors.ratingsCount && <p role="alert">{errors.ratingsCount?.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label htmlFor="shipping">Shipping</label>
                            <input type='text' name='shipping' defaultValue={shipping} {...register('shipping', { required: "shipping is required" })} placeholder='Shipping' className="input input-bordered w-full max-w-xl" />
                            {errors.shipping && <p role="alert">{errors.shipping?.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label htmlFor="photo">Photo-URL</label>
                            <input type='text' name='photo' defaultValue={img} {...register('photo', { required: "Photo is required" })} placeholder='Image URL' className="input input-bordered w-full max-w-xl" />
                            {errors.photo && <p role="alert">{errors.photo?.message}</p>}
                        </div>





                        <input className='btn btn-outline btn-success  w-full mt-6' value='Update' type="submit" />
                    </form>
                </div>

            </div>
        </div>
    );
};

export default UpdateProduct;