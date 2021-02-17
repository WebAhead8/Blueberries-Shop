import React from "react";



function MyBucket({ myBucket }) {
    const{myBucketProducts,myBucketPrice}=myBucket;
    console.log(myBucket)
  return (
    <fieldset>
      <legend>My Bucket</legend>
      {myBucketProducts.map(product => (
          <label>{product.productName} --- {product.price}₪  <span>(remove)</span></label>
      ))}
      <label>Total ---- {myBucketPrice}</label>
    </fieldset>
  );
}

export default MyBucket;