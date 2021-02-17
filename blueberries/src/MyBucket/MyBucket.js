import React from "react";



function MyBucket({ myBucket,setMyBucket }) {
    const{myBucketProducts,myBucketPrice}=myBucket;


  return (
    <fieldset>
      <legend>My Bucket</legend>
      {myBucketProducts.map((product,i) => (
        <label><input
        type="checkbox"
        checked={true}
        onChange={(event) => {
            const result=myBucketProducts.filter((product,index)=>  index!==i);
            setMyBucket({myBucketProducts:result,myBucketPrice:myBucketPrice-product.price});
        }}
        />
        {product.productName}------- {product.price}₪
        </label>
      ))}
      <label>Total ---- {myBucketPrice}</label>
    </fieldset>
  );
}

export default MyBucket;