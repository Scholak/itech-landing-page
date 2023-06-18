import React from 'react'
import discountBg from '../assets/discount_bg.png'
import similingFace from '../assets/similing_face_emoji.png'

const Discount = () => {
  return (
		<section className='relative w-full flex flex-col items-center justify-center gap-2 py-4 text-white sm:flex-row'>
			<img
				src={discountBg}
				alt='shapes'
				className='absolute w-full top-0 -z-10'
			/>
			<button className='py-2 px-4 rounded bg-white text-gray-600'>Special</button>
			<img src={similingFace} alt='similing face' className='hidden md:block' />
			<p className='text-lg text-center font-medium text-gray-200'>
				Get <span className='text-white font-bold'>20% Discount</span> get for new account
			</p>
      <a href="#" className='font-semibold text-lg underline'>Register now</a>
		</section>
	)
}

export default Discount
