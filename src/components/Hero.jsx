import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import heroImg from '../assets/hero_img.png'
import apple from '../assets/apple_logo.png'
import playBtn from '../assets/play_button.png'
import refresh from '../assets/specificFeature/refresh.png'
import card from '../assets/card.png'

const Hero = () => {
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
		<section className='bg-white' ref={ref}>
			<div className='container mx-auto flex flex-col items-center py-24 px-10 lg:flex-row-reverse lg:items-start'>
				<motion.img
					variants={variants}
					transition={{ duration: 1 }}
					initial='fromRight'
					animate={isInView ? 'animate' : 'fromRight'}
					src={heroImg}
					alt='hero image'
					className='lg:w-2/5'
				/>
				<motion.div
					variants={variants}
					transition={{ duration: 1 }}
					initial='fromLeft'
					animate={isInView ? 'animate' : 'fromLeft'}
					className='flex flex-col items-start lg:w-3/5 lg:pr-48'
				>
					<h3 className='w-min whitespace-nowrap rounded shadow mb-12 p-2 bg-gray-200 text-purple-800'>
						Notero-Easy Note App
					</h3>
					<h2 className='mb-6 text-6xl font-bold text-gray-800 md:mb-10'>
						Note{' '}
						<span className='bg-gradient-to-r from-purple-800 to-pink-400 bg-clip-text text-transparent'>
							Your Everything
						</span>{' '}
						In One App
					</h2>
					<p className='mb-6 text-gray-500 font-medium text-lg text-justify'>
						No Coding required to make customization. the live customizer has
						everything you need.
					</p>
					<div className='flex flex-col items-center mb-6 sm:flex-row md:mb-12'>
						<button className='flex items-center justify-center mt-4 py-4 px-8 gap-4 rounded-2xl border border-purple-800 bg-purple-800 text-white font-medium md:text-xl'>
							<img src={apple} alt='play button icon' />
							Download App
						</button>
						<button className='flex items-center gap-2 mt-4 py-3 px-8'>
							<img src={playBtn} alt='play button icon' />
							<p className='flex flex-col text-left'>
								<span>View</span> <span>Promotion</span>
							</p>
						</button>
					</div>
					<div className='flex flex-col gap-10 items-center sm:flex-row'>
						<div className='flex items-center gap-2 font-medium'>
							<img
								src={refresh}
								alt='refresh icon'
								className='rounded-full p-3 bg-gray-200'
							/>
							Free 14 Days Trial
						</div>
						<div className='flex items-center gap-2 font-medium'>
							<img
								src={card}
								alt='refresh icon'
								className='rounded-full p-3 bg-gray-200'
							/>
							One Time Payment
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	)
}

export default Hero
