import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import featuresImg from '../assets/features/features_img.png'
import tic from '../assets/features/feature_tic.png'
import search from '../assets/features/feature_search.png'
import puzzle from '../assets/features/feature_puzzle.png'
import clock from '../assets/features/feature_clock.png'
import painting from '../assets/features/feature_painting.png'

const Features = () => {
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
		<section className='relative py-12 bg-pink-50 overflow-hidden' ref={ref}>
			<motion.div
				variants={variants}
				initial='hidden'
				animate={isInView ? 'visible' : 'hidden'}
				transition={{ duration: 1, delay: 1 }}
			>
				<img
					src={featuresImg}
					alt=''
					className='absolute top-1/2 left-1/2 -translate-x-1/2'
				/>
				<h3 className='w-min whitespace-nowrap mx-auto px-2 rounded shadow mb-8 p-3 bg-white text-purple-800 text-center z-10'>
					Notero-Easy Note App
				</h3>
				<h2 className='mb-12 text-4xl font-bold text-center z-10'>
					Awesome{' '}
					<span className='bg-gradient-to-r from-purple-800 to-pink-400 bg-clip-text text-transparent'>
						Features
					</span>
				</h2>
				<div className='grid grid-rows-1 gap-4 place-items-center md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 z-10'>
					<div className='flex flex-col items-center gap-8 z-10'>
						<img src={tic} alt='tic' className='h-32 w-32' />
						<p className='font-bold w-2/3 text-center'>
							Notes Powerful and Security
						</p>
					</div>
					<div className='flex flex-col items-center gap-8 z-10'>
						<img src={search} alt='search' className='h-32 w-32' />
						<p className='font-bold w-2/3 text-center'>
							Easy Sort, Classify and Search
						</p>
					</div>
					<div className='flex flex-col items-center gap-8 z-10'>
						<img src={puzzle} alt='puzzle' className='h-32 w-32' />
						<p className='font-bold w-2/3 text-center'>
							Collaboration and Share
						</p>
					</div>
					<div className='flex flex-col items-center gap-8 z-10'>
						<img src={clock} alt='clock' className='h-32 w-32' />
						<p className='font-bold w-2/3 text-center'>
							Quick Note In Everywhere
						</p>
					</div>
					<div className='flex flex-col items-center gap-8 z-10'>
						<img src={painting} alt='painting' className='h-32 w-32' />
						<p className='font-bold w-2/3 text-center'>
							Write and Draw on Ipad
						</p>
					</div>
				</div>
			</motion.div>
		</section>
	)
}

export default Features
