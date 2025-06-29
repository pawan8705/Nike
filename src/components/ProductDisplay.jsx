/* eslint-disable react/prop-types */
import { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Star } from 'lucide-react'
import { Link } from 'react-router-dom'

const ProductDisplay = (props) => {
    const { product } = props
    const { addToCart } = useContext(ShopContext)
    const [mainImage, setMainImage] = useState(product.image)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 my-20 md:gap-10 px-6 md:px-0'>
            <div className='flex md:1/2 gap-4'>
                <div className='flex flex-col gap-4 md:h-[500px]'>
                    <img onClick={() => setMainImage(product.image)} src={product.image} alt="" className='md:h-[163px] h-[75px] md:w-[100px] w-[120px]' />
                    <img onClick={() => setMainImage(product.image1)} src={product.image1} alt="" className='md:h-[163px] h-[75px] md:w-[100px] w-[120px]' />
                    <img onClick={() => setMainImage(product.image2)} src={product.image2} alt="" className='md:h-[163px] h-[75px] md:w-[100px] w-[120px]' />
                    <img onClick={() => setMainImage(product.image3)} src={product.image3} alt="" className='md:h-[163px] h-[75px] md:w-[100px] w-[120px]' />
                </div>
                <div>
                    <img src={mainImage} alt="" className='md:h-[580px] md:w-[480px] w-[600px]' />
                </div>
            </div>
            <div className='flex md:1/2 flex-col mt-8 md:mt-0'>
                <h1 className='text-[#3d3d3d] dark:text-[#9dffe8] text-4xl font-bold'>{product.name}</h1>
                <div className='flex items-center gap-1 text-[#1c1c1c] dark:text-[#08b089] text-lg mt-4'>
                    <Star fill='#138695' />
                    <Star fill='#138695' />
                    <Star fill='#138695' />
                    <Star fill='#138695' />
                    <Star fill='gray' />
                    <p>(122)</p>
                </div>
                <div className='flex gap-5 font-semibold items-center my-5'>
                    <div className='text-gray-500 text-2xl line-through'>${product.old_price}</div>
                    <div className='text-[#138695] dark:text-[#9dffe8] text-3xl'>${product.new_price}</div>
                </div>
                <div className='dark:text-[#9dffe8]'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolore voluptatem nesciunt facere totam suscipit illum laboriosam nulla, corporis amet consequuntur, fugiat modi voluptate libero?
                </div>
                <div>
                    <h1 className='font-semibold text-gray-400 text-2xl mt-4'>Select Size</h1>
                    <div className='flex flex-wrap gap-4 items-center my-4'>
                        <div className='border bg-gray-100 p-4'>UK 7</div>
                        <div className='border bg-gray-100 p-4'>UK 8</div>
                        <div className='border bg-gray-100 p-4'>UK 9</div>
                        <div className='border bg-gray-100 p-4'>UK 10</div>
                        <div className='border bg-gray-100 p-4'>UK 11</div>
                    </div>
                </div>
                <Link to='/cart'>
                    <button onClick={() => { addToCart(product.id) }} className='bg-[#138695] text-white px-6 py-3 my-4 w-max'>ADD TO CART</button>
                </Link>
                <p className='dark:text-[#9dffe8]'><span className='font-semibold dark:text-[#9dffe8]'>Category :</span> Sports, Gym, Running</p>
                <p className='dark:text-[#9dffe8]'><span className='font-semibold dark:text-[#9dffe8]'>Tags :</span> Modern, Latest</p>
            </div>
        </div>
    )
}

export default ProductDisplay
