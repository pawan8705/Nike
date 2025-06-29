import Breadcrum from './Breadcrum'
import ProductDisplay from './ProductDisplay'
import Description from './Description'
import { useParams } from 'react-router-dom'
import all_product from '../Utils/all_product'

const SingleProduct = () => {
    const {productId} = useParams();
    const product = all_product.find((e)=> e.id === Number(productId))
  return (
    <div className='max-w-7xl mx-auto mb-32 mt-14 dark:bg-[#00042b]'>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <Description/>
    </div>
  )
}

export default SingleProduct
