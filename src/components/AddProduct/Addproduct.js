import React from 'react';
import { useForm } from 'react-hook-form';

const Addproduct = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    let quantity = 0;
    const imageHostKey = 'ac41dad16cfd8c0e58eddebc45ecdd20';
    console.log(imageHostKey);



    const handelAddProduct = (data) => {

        console.log(data);

        const image = data.photo[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`

        fetch(url, {
            method: 'POST',
            body: formData
        }).then((res) => res.json()).then((imgData) => {

            //console.log(imgData);
            if (imgData.success) {


                //console.log(imgData.data.url);

                const product = {

                    category: data.category,
                    name: data.name,
                    seller: data.seller,
                    price: parseInt(data.price),
                    stock: parseInt(data.stock),

                    ratings: parseInt(data.ratings),
                    ratingsCount: parseInt(data.ratingsCount),

                    img: imgData.data.url,
                    shipping: parseInt(data.shipping),
                    quantity
                }

                addproductDatabase(product);
            }
        }).catch((error) => {
            console.log(error.message);
        })


        const addproductDatabase = (product) => {

            fetch('https://ema-john-simple-server-module-59.vercel.app/addProducts', {

                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product)
            }).then((res) => res.json()).then((data) => {

                console.log(data);


                if (data.acknowledged) {
                    alert('Successfuly Added Doctors Info');

                }
            }).catch((error) => {

                console.error(error.messsage);
            })




        }

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
        <div className='h-[800px] flex justify-center items-center mt-10'>
            <div className='w-[510px] p-7 card card-compact  bg-base-100 shadow-xl'>
                <h1 className='text-3xl text-center font-bold text-red-400'>Add-Product</h1>
                <div className="card-body">
                    <form onSubmit={handleSubmit(handelAddProduct)}>
                        <div className="form-control  w-full max-w-xs">
                            <input type='text' name='category' {...register('category', { required: "category is required" })} placeholder='CategoryName' className="input input-bordered w-full max-w-xl" />
                            {errors.category && <p role="alert">{errors.category?.message}</p>}
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <input type='text' name='name' {...register('name', { required: "Product Name is required" })} placeholder='Product Name' className="input input-bordered w-full max-w-xl" />
                            {errors.name && <p role="alert">{errors.name?.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <input type='text' name='seller' {...register('seller', { required: "Company  Name is required" })} placeholder='Company Name' className="input input-bordered w-full max-w-xl" />
                            {errors.seller && <p role="alert">{errors.seller?.message}</p>}
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <input type='text' name='price' {...register('price', { required: "price is required" })} placeholder='Price' className="input input-bordered w-full max-w-xl" />
                            {errors.price && <p role="alert">{errors.price?.message}</p>}
                        </div>



                        <div className="form-control w-full max-w-xs">
                            <input type='text' name='stock' {...register('stock', { required: "stock is required" })} placeholder='Stock' className="input input-bordered w-full max-w-xl" />
                            {errors.stock && <p role="alert">{errors.stock?.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <input type='text' name='ratings' {...register('ratings', { required: "ratings is required" })} placeholder='Ratings' className="input input-bordered w-full max-w-xl" />
                            {errors.ratings && <p role="alert">{errors.ratings?.message}</p>}
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <input type='text' name='ratingsCount' {...register('ratingsCount', { required: "ratingsCount is required" })} placeholder='Ratings Count' className="input input-bordered w-full max-w-xl" />
                            {errors.ratingsCount && <p role="alert">{errors.ratingsCount?.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <input type='text' name='shipping' {...register('shipping', { required: "shipping is required" })} placeholder='Shipping' className="input input-bordered w-full max-w-xl" />
                            {errors.shipping && <p role="alert">{errors.shipping?.message}</p>}
                        </div>



                        <div className="form-control w-full max-w-xs">
                            <input type='file' name='photo' {...register('photo', { required: "'photo is required" })} className="input input-bordered w-full max-w-xl" />
                            {errors.photo && <p role="alert">{errors.photo?.message}</p>}
                        </div>

                        <input className='btn btn-outline btn-success w-full mt-6' value='Add-Product' type="submit" />
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Addproduct;