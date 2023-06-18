import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaAngleDown } from 'react-icons/fa'
import bubbles from '../assets/specificFeature/feature2_bubbles.png'
import tablet from '../assets/specificFeature/feature2_img.png'
import chrome from '../assets/chrome_logo.png'

const Feature2 = () => {
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

  const [active, setActive] = useState(0)

  const handleToggleAccordion = number => {
    setActive(number)
  }

  return (
		<section
			className='container mx-auto flex flex-col-reverse items-center py-20 bg-white md:flex-row'
			ref={ref}
		>
			<motion.div
				variants={variants}
				transition={{ duration: 0.5, delay: 1 }}
				initial='fromLeft'
				animate={isInView ? 'animate' : 'fromLeft'}
				className='flex flex-col justify-between items-start md:w-1/2 md:mr-40 lg:mr-80'
			>
				<h3 className='w-min whitespace-nowrap rounded shadow mb-4 p-2 bg-gray-200 text-purple-800'>
					Better Note Management
				</h3>
				<h2 className='mb-6 text-4xl font-bold md:mb-10'>
					Your Notes{' '}
					<span className='bg-gradient-to-r from-purple-800 to-pink-400 bg-clip-text text-transparent'>
						Security
					</span>
				</h2>
				<p className='mb-6 text-gray-700 text-justify leading-8'>
					Automatically syncs across all your devices. You can also access and
					write notes without internet connection.
				</p>
				<div className='grid gap-4'>
					<div
						className={`accordion w-full p-5 rounded-md cursor-pointer transition duration-200 ${
							active === 0
								? 'active text-purple-800 bg-gray-200'
								: 'text-gray-800'
						}`}
						onClick={() => handleToggleAccordion(0)}
					>
						<div className='flex items-center justify-between'>
							<h6 className='font-semibold transition duration-200'>
								Create And Save Your Notes With Multi-Media
							</h6>
							<FaAngleDown
								className={`transition duration-200 ${
									active === 0 ? 'rotate-180' : ''
								}`}
							/>
						</div>
						<div className={`accordion ${active === 0 ? 'active' : ''}`}>
							<p
								className={`text-gray-500 font-semibold leading-8 transition duration-200 overflow-hidden ${
									active === 0 ? 'pt-4' : ''
								}`}
							>
								Images, videos, PDFs and audio files are supported. Create math
								expressions and diagrams directly from the app. Take photos with
								the mobile app and save them to a note.
							</p>
						</div>
					</div>
					<div
						className={`accordion w-full p-5 rounded-md cursor-pointer transition duration-200 ${
							active === 1
								? 'active text-purple-800 bg-gray-200'
								: 'text-gray-800'
						}`}
						onClick={() => handleToggleAccordion(1)}
					>
						<div className='flex items-center justify-between'>
							<h6 className='font-semibold transition duration-200'>
								Web Clipper Extension
							</h6>
							<FaAngleDown
								className={`transition duration-200 ${
									active === 1 ? 'rotate-180' : ''
								}`}
							/>
						</div>
						<div className={`accordion ${active === 1 ? 'active' : ''}`}>
							<p
								className={`text-gray-500 font-semibold leading-8 transition duration-200 overflow-hidden ${
									active === 1 ? 'pt-4' : ''
								}`}
							>
								Images, videos, PDFs and audio files are supported. Create math
								expressions and diagrams directly from the app. Take photos with
								the mobile app and save them to a note.
							</p>
						</div>
					</div>
					<div
						className={`accordion w-full p-5 rounded-md cursor-pointer transition duration-200 ${
							active === 2
								? 'active text-purple-800 bg-gray-200'
								: 'text-gray-800'
						}`}
						onClick={() => handleToggleAccordion(2)}
					>
						<div className='flex items-center justify-between'>
							<h6 className='font-semibold transition duration-200'>
								Protect Your Note With Lock
							</h6>
							<FaAngleDown
								className={`transition duration-200 ${
									active === 2 ? 'rotate-180' : ''
								}`}
							/>
						</div>
						<div className={`accordion ${active === 2 ? 'active' : ''}`}>
							<p
								className={`text-gray-500 font-semibold leading-8 transition duration-200 overflow-hidden ${
									active === 2 ? 'pt-4' : ''
								}`}
							>
								Images, videos, PDFs and audio files are supported. Create math
								expressions and diagrams directly from the app. Take photos with
								the mobile app and save them to a note.
							</p>
						</div>
					</div>
				</div>
				<button className='flex items-center gap-3 justify-between mt-4 mx-auto py-3 px-8 rounded-xl shadow-md bg-gray-100 md:mx-0'>
					<img src={chrome} alt='chrome logo' />
					<div className='h-10 w-px bg-gray-400'></div>
					<div className='flex flex-col items-start'>
						<span className='text-gray-600'>Available In The</span>
						<span className='text-gray-800'>Chrome Web Store</span>
					</div>
				</button>
			</motion.div>
			<motion.div
				variants={variants}
				transition={{ duration: 1, delay: 1 }}
				initial='fromRight'
				animate={isInView ? 'animate' : 'fromRight'}
				className='relative mb-10 md:mb-0 md:w-1/2'
			>
				<img src={bubbles} alt='bubbles' className='absolute h-full' />
				<img src={tablet} alt='tablet' className='z-10' />
			</motion.div>
		</section>
	)
}

export default Feature2
