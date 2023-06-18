import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import bubbles from '../assets/specificFeature/feature3_bubbles.png'
import theme from '../assets/specificFeature/feature3_img.png'

const Feature3 = () => {
	const ref = useRef(null)

	const isInView = useInView(ref, { once: true })

	const variants = {
		fromLeft: {
			opacity: 0,
			x: -75,
		},
		fromRight: {
			opacity: 0,
			x: 75,
		},
		animate: {
			opacity: 1,
			x: 0,
		},
	}

  return (
		<section
			className='container mx-auto flex flex-col items-center py-20 bg-white md:flex-row md:justify-around'
			ref={ref}
		>
			<motion.div
				variants={variants}
				transition={{ duration: 0.5, delay: 1 }}
				initial='fromLeft'
				animate={isInView ? 'animate' : 'fromLeft'}
				className='relative mb-10 md:mb-0 md:w-2/5'
			>
				<img src={bubbles} alt='bubbles' className='absolute h-full' />
				<img src={theme} alt='tablet' className='z-10' />
			</motion.div>
			<motion.div
				variants={variants}
				transition={{ duration: 1, delay: 1 }}
				initial='fromRight'
				animate={isInView ? 'animate' : 'fromRight'}
				className='flex flex-col justify-between items-start px-2 md:w-2/5 md:pr-12 lg:pr-24'
			>
				<h3 className='w-min whitespace-nowrap rounded shadow mb-4 p-2 bg-gray-200 text-purple-800'>
					Beautiful Themes
				</h3>
				<h2 className='mb-6 text-4xl font-bold md:mb-10'>
					Focus More With{' '}
					<span className='bg-gradient-to-r from-purple-800 to-pink-400 bg-clip-text text-transparent'>
						Dark Theme
					</span>
				</h2>
				<p className='mb-6 text-gray-700 text-justify leading-8 md:mb-10'>
					Apply Notero’s elegant themes to your taste. Dark themes work
					excellently for those who prefer distraction-free mode.
				</p>
				<ul className='grid gap-2 text-gray-600 font-medium list-disc'>
					<li>Filtering notes using matched keywords</li>
					<li className='text-gray-800'>8 Beautiful themes for you select</li>
					<li>Save energy for your device</li>
					<li>Easy to switch between light and dark mode</li>
				</ul>
				<button className='mt-4 py-3 px-8 rounded-xl shadow-md bg-purple-800 text-white'>
					Discover Now
				</button>
			</motion.div>
		</section>
	)
}

export default Feature3
