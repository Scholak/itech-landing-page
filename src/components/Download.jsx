import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import apple from '../assets/apple_logo.png'
import googlePlay from '../assets/google_play_logo.png'

const Download = () => {
	const ref = useRef(null)

	const isInView = useInView(ref, { once: true })

	const variants = {
		hidden: {
			opacity: 0,
			y: 75,
		},
		visible: {
			opacity: 1,
			y: 0,
		},
	}

	return (
		<section className='bg-pink-50' ref={ref}>
			<motion.div
				variants={variants}
				initial='hidden'
				animate={isInView ? 'visible' : 'hidden'}
				transition={{ duration: 1, delay: 1 }}
				className='container mx-auto py-20 md:px-20 '
			>
				<h2 className='mb-4 text-4xl font-bold text-center'>
					Ready To{' '}
					<span className=' bg-gradient-to-r from-purple-800 to-pink-400 bg-clip-text text-transparent'>
						Download
					</span>
				</h2>
				<p className='mb-16 text-center text-sm text-gray-500'>
					Discover your new favorite spaces, from Sao Paulo to Seoul. Download
					from App Store or Google Play.
				</p>
				<div className='flex flex-col items-center justify-between gap-4 md:flex-row md:gap-20'>
					<button className='flex-1 flex items-center justify-center mt-4 py-5 px-10 gap-4 rounded-3xl border border-purple-800 bg-purple-800 text-white font-medium md:text-xl'>
						<img src={apple} alt='play button icon' />
						Download App on app store
					</button>
					<button className='flex-1 flex items-center justify-center mt-4 py-5 px-10 gap-4 rounded-3xl border border-gray-800 text-gray-800 font-medium md:text-xl'>
						<img src={googlePlay} alt='play button icon' />
						<div>
							<p className='text-left'>Download App on Google play</p>
						</div>
					</button>
				</div>
			</motion.div>
		</section>
	)
}

export default Download
