import { useQuery } from '@tanstack/react-query';
import React, { useRef, useState } from 'react';
import ProductTableData from './ProductTableData';

const ProductTable = () => {

    const [search, setSearch] = useState('');

    const { data: allProduct = [], refetch } = useQuery({

        queryKey: ['allproducts'],
        queryFn: async () => {

            const res = await fetch(`https://ema-john-simple-server-module-59.vercel.app/allproducts?search=${search}`);
            const data = await res.json();
            return data;
        }

    })

    const searchRef = useRef();



    const handelSearch = () => {

        setSearch(searchRef.current.value);

    }

    const handelDeletePoducts = (id) => {

        const confirmation = window.confirm(`Are You sure you want to be the delete Product ${id}`);
        if (confirmation) {
            fetch(`https://ema-john-simple-server-module-59.vercel.app/allproducts/${id}`, {
                method: 'DELETE'
            }).then((res) => res.json()).then((data) => {
                console.log(data);
                if (data.acknowledged) {
                    alert('Successfully-Delete');
                    refetch();
                }
            }).catch((error) => {
                console.error(error.message);
            })
        }
    }

    return (
        <div>
            <h1 className='text-center text-3xl font-bold mt-3'> <button class="btn  btn-outline btn-error text-3xl"> All Products List :{allProduct.length}</button> </h1>


            <div class="form-control m-3 h-[100px] flex justify-center items-center">

                <input ref={searchRef} type="text" placeholder="Search Bar" class="input input-bordered" />
                <button onClick={handelSearch} className=" mt-3 btn btn-outline btn-primary">Search</button>
            </div>

            <div className="overflow-x-auto m-6">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Count</th>
                            <th>Image</th>
                            <th>Category</th>
                            <th>Product-Name</th>
                            <th>seller</th>
                            <th>   stock</th>
                            <th>Price</th>
                            <th> Ratings</th>
                            <th>RatingsCount</th>
                            <th>shipping </th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allProduct.map((v, index) => <ProductTableData key={index} count={index} product={v} handelDeletePoducts={handelDeletePoducts}></ProductTableData>)

                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ProductTable;