import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaStar } from 'react-icons/fa'
import news from '../assets/testimonials/main_1.png'
import appStore from '../assets/testimonials/main_2.png'
import playBtn from '../assets/play_button.png'
import bg from '../assets/testimonials/testimonials_bg.png'
import review1 from '../assets/testimonials/review_1.png'
import review2 from '../assets/testimonials/review_2.png'
import review3 from '../assets/testimonials/review_3.png'

const Reviews = () => {
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
			className='container mx-auto py-20 grid grid-cols-1 gap-12 lg:grid-cols-2'
			ref={ref}
		>
			<motion.div
				variants={variants}
				transition={{ duration: 0.5, delay: 1 }}
				initial='fromLeft'
				animate={isInView ? 'animate' : 'fromLeft'}
				className='flex flex-col justify-between'
			>
				<h3 className='w-min whitespace-nowrap rounded shadow mb-4 p-3 bg-gray-200 text-purple-800'>
					Testimonials
				</h3>
				<h2 className='mb-6 text-4xl font-bold'>
					Loved From{' '}
					<span className='bg-gradient-to-r from-purple-800 to-pink-400 bg-clip-text text-transparent'>
						Customers
					</span>
				</h2>
				<p className='mb-10 lead-8 text-gray-500'>
					Notero loved from thoudsands customer worldwide and get trusted from
					big companies.
				</p>
				<div className='flex items-center gap-10 mb-10'>
					<div>
						<img src={news} alt='news image' />
						<p className='block font-bold text-2xl text-purple-800 mb-1'>
							2,5M+
						</p>
						<p className='text-gray-600 w-full md:w-2/3'>
							Downloaded and Installation
						</p>
					</div>
					<span className='w-px h-32 bg-gray-500'></span>
					<div>
						<img src={appStore} alt='app store logo' />
						<p className='block font-bold text-2xl text-purple-800 mb-1'>
							4.8/5
						</p>
						<div className='flex gap-2 text-yellow-400 mb-1'>
							<FaStar />
							<FaStar />
							<FaStar />
							<FaStar />
							<FaStar />
						</div>
						<p className='text-gray-600'>Based on 1,258 reviews</p>
					</div>
				</div>
				<div className='flex flex-col items-center md:flex-row'>
					<button className='mt-4 py-3 px-10 rounded-xl shadow-md bg-purple-800 text-white text-xl font-medium'>
						See Reviews on app store
					</button>
					<button className='flex items-center gap-2 mt-4 py-3 px-8'>
						<img src={playBtn} alt='play button icon' />
						<div>
							<p className='text-left'>View Promotion</p>
						</div>
					</button>
				</div>
			</motion.div>
			<motion.div
				variants={variants}
				transition={{ duration: 1, delay: 1 }}
				initial='fromRight'
				animate={isInView ? 'animate' : 'fromRight'}
				className='relative overflow-hidden flex flex-col gap-8 justify-between'
			>
				<img src={bg} alt='' className='absolute inset-0' />
				<div className='max-w-xl flex items-center gap-3 p-3 rounded-lg shadow-md bg-white z-10 md:gap-8 md:p-8'>
					<img src={review1} alt='review image' />
					<div className='flex flex-col gap-3 justify-between'>
						<div className='flex gap-2 text-yellow-400 mb-1'>
							<FaStar />
							<FaStar />
							<FaStar />
							<FaStar />
							<FaStar />
						</div>
						<p className='text-medium text-gray-900'>
							“You can even send emails to Evernote and gatherall of the things
							you need in a single place.”
						</p>
						<p className='text-xs'>
							JURGEN K. / Senior Marketing At{' '}
							<span className='text-sky-400'>Brator</span>
						</p>
					</div>
				</div>
				<div className='max-w-xl flex items-center gap-3 p-3 rounded-lg shadow-md bg-white z-10 md:gap-8 md:p-8 md:translate-x-12'>
					<img src={review2} alt='review image' />
					<div className='flex flex-col gap-3 justify-between'>
						<div className='flex gap-2 text-yellow-400 mb-1'>
							<FaStar />
							<FaStar />
							<FaStar />
							<FaStar />
							<FaStar />
						</div>
						<p className='text-medium text-gray-900'>
							“Notero - 1st my choice for notes app. Awesome”
						</p>
						<p className='text-xs'>
							FODEN P. / Director At{' '}
							<span className='text-sky-400'>Ecoland Resort</span>
						</p>
					</div>
				</div>
				<div className='max-w-xl flex items-center gap-3 p-3 rounded-lg shadow-md bg-white z-10 md:gap-8 md:p-8'>
					<img src={review3} alt='review image' />
					<div className='flex flex-col gap-3 justify-between'>
						<div className='flex gap-2 text-yellow-400 mb-1'>
							<FaStar />
							<FaStar />
							<FaStar />
							<FaStar />
							<FaStar />
						</div>
						<p className='text-medium text-gray-900'>
							“.This app is seriously good. It’s simple, clean anda real joy to
							use.”
						</p>
						<p className='text-xs'>
							KERRY T. / Designer At{' '}
							<span className='text-sky-400'>Teckzone Inc</span>
						</p>
					</div>
				</div>
			</motion.div>
		</section>
	)
}

export default Reviews
