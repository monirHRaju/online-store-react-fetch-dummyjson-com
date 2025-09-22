import React from 'react';
import './Product.css'
const Product = ({product, handleCart}) => {
    
    return (
        <div className='card'>
            <img src={product.images[0]} height='200px' />
            <h4>{product.title}</h4>
            <p>Price: ${product.price} </p>
            <button onClick={()=> handleCart(product)}>Buy Now</button>
            <button>Details</button>
        </div>
        
    );
};


export default Product;


//    {
//     "id": 15,
//     "title": "Wooden Bathroom Sink With Mirror",
//     "description": "The Wooden Bathroom Sink with Mirror is a unique and stylish addition to your bathroom, featuring a wooden sink countertop and a matching mirror.",
//     "category": "furniture",
//     "price": 799.99,
//     "discountPercentage": 8.8,
//     "rating": 3.59,
//     "stock": 7,
//     "tags": [
//         "furniture",
//         "bathroom"
//     ],
//     "brand": "Bath Trends",
//     "sku": "FUR-BAT-WOO-015",
//     "weight": 10,
//     "dimensions": {
//         "width": 7.98,
//         "height": 8.88,
//         "depth": 28.46
//     },
//     "warrantyInformation": "3 year warranty",
//     "shippingInformation": "Ships in 3-5 business days",
//     "availabilityStatus": "Low Stock",
//     "reviews": [
//         {
//             "rating": 4,
//             "comment": "Fast shipping!",
//             "date": "2025-04-30T09:41:02.053Z",
//             "reviewerName": "Logan Torres",
//             "reviewerEmail": "logan.torres@x.dummyjson.com"
//         },
//         {
//             "rating": 5,
//             "comment": "Very pleased!",
//             "date": "2025-04-30T09:41:02.053Z",
//             "reviewerName": "Aria Parker",
//             "reviewerEmail": "aria.parker@x.dummyjson.com"
//         },
//         {
//             "rating": 3,
//             "comment": "Poor quality!",
//             "date": "2025-04-30T09:41:02.053Z",
//             "reviewerName": "Dylan Wells",
//             "reviewerEmail": "dylan.wells@x.dummyjson.com"
//         }
//     ],
//     "returnPolicy": "60 days return policy",
//     "minimumOrderQuantity": 2,
//     "meta": {
//         "createdAt": "2025-04-30T09:41:02.053Z",
//         "updatedAt": "2025-04-30T09:41:02.053Z",
//         "barcode": "1958104402873",
//         "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
//     },
//     "images": [
//         "https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/1.webp",
//         "https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/2.webp",
//         "https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/3.webp"
//     ],
//     "thumbnail": "https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/thumbnail.webp"
// }