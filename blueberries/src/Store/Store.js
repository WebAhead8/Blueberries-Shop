import React from 'react'
import './Store.css'
import PriceFilter from '../PriceFilter/PriceFilter.js'
import CategoryFilter from '../CategoryFilter/CategoryFilter.js'
import ProductsList from '../ProductsList/ProductsList.js'
import MyBucket from '../MyBucket/MyBucket.js'
function Store (props) {
  const [catFilter, setCatFilter] = React.useState('all')
  const [priceFilter, setPriceFilter] = React.useState([1, 50])
  const [myBucket, setMyBucket] = React.useState({
    myBucketProducts: [],
    myBucketPrice: 0
  })
  return (
    <main>
      <section className='filters'>
        <h1>Blueberries Shop</h1>
        <h2>Filters</h2>
        <form>
          <PriceFilter
            priceFilter={priceFilter}
            setPriceFilter={setPriceFilter}
          />
          <CategoryFilter catFilter={catFilter} setCatFilter={setCatFilter} />
          <MyBucket myBucket={myBucket} />
        </form>
      </section>
      <section className='products'>
        <h2>Products</h2>
        <ProductsList
          catFilter={catFilter}
          priceFilter={priceFilter}
          myBucket={myBucket}
          setMyBucket={setMyBucket}
        />
      </section>
    </main>
  )
}

export default Store
