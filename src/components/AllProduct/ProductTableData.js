import React from 'react';
import { Link } from 'react-router-dom'

const ProductTableData = ({ product, count, handelDeletePoducts }) => {
    const { _id, category, name,
        seller,
        price,
        stock,
        ratings, ratingsCount,
        img,
        shipping
    } = product;
    return (
        <tr className="hover">
            <th>{count + 1}</th>
            <td>
                <div className="avatar">
                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={img} alt='' />
                    </div>
                </div>
            </td>
            <td>{category}</td>
            <td>{name}</td>
            <td>{seller}</td>
            <th>{stock}</th>
            <td>{price}</td>
            <td>{ratings} - start </td>
            <td>{ratingsCount}</td>
            <td>{shipping}</td>
            <td><Link><button onClick={() => handelDeletePoducts(_id)} class="btn  btn-outline btn-error">Delete</button></Link></td>
            <td><Link to={`/updateproduct/${_id}`}><button className="btn btn-outline btn-primary">Update</button></Link></td>
        </tr>
    );
};

export default ProductTableData;