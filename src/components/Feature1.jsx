import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import bubbles from '../assets/specificFeature/feature1_bubbles.png'
import tablet from '../assets/specificFeature/feature1_img.png'
import lines from '../assets/specificFeature/feature1_lines.png'
import ticket from '../assets/specificFeature/ticket.png'
import refresh from '../assets/specificFeature/refresh.png'
import recieve from '../assets/specificFeature/recieve.png'

const Feature1 = () => {
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
			x: 0
		}
	}
	
  return (
		<section
			className='container mx-auto flex flex-col items-center py-20 bg-white md:flex-row'
			ref={ref}
		>
			<motion.div
				variants={variants}
				transition={{ duration: 0.5, delay: 1 }}
				initial='fromLeft'
				animate={isInView ? 'animate' : 'fromLeft'}
				className='relative mb-10 md:mb-0 md:w-3/5'
			>
				<img src={bubbles} alt='bubbles' className='absolute h-full' />
				<img src={lines} alt='lines' className='absolute h-full' />
				<img src={tablet} alt='tablet' className='z-10' />
			</motion.div>
			<motion.div
				variants={variants}
				transition={{ duration: 1, delay: 1 }}
				initial='fromRight'
				animate={isInView ? 'animate' : 'fromRight'}
				className='flex flex-col justify-between items-start px-2 md:w-2/5 md:pr-16 lg:pr-24'
			>
				<h3 className='w-min whitespace-nowrap rounded shadow mb-4 p-2 bg-gray-200 text-purple-800'>
					Notero-Easy Note App
				</h3>
				<h2 className='mb-6 text-4xl font-bold md:mb-10'>
					The Notes For{' '}
					<span className='bg-gradient-to-r from-purple-800 to-pink-400 bg-clip-text text-transparent'>
						Creative
					</span>
				</h2>
				<p className='mb-6 text-gray-700 text-justify leading-8'>
					Stay focused and productive with a clean clutter-free note space. the
					flexible ways to organize your notes: hashtags , nested notebooks ,
					pining notes to the top of the note list, ect.
				</p>
				<ul className='flex flex-col gap-4 md:gap-8'>
					<li className='flex gap-2 items-center font-semibold text-lg'>
						<img
							src={ticket}
							alt='ticket icon'
							className='rounded-full p-3 bg-gray-200'
						/>
						Filtering notes using matched keywords
					</li>
					<li className='flex gap-2 items-center font-semibold text-lg'>
						<img
							src={refresh}
							alt='refresh icon'
							className='rounded-full p-3 bg-gray-200'
						/>
						Automatically sync in real time
					</li>
					<li className='flex gap-2 items-center font-semibold text-lg'>
						<img
							src={recieve}
							alt='recieve icon'
							className='rounded-full p-3 bg-gray-200'
						/>
						Complete note editor with rich text options
					</li>
				</ul>
				<button className='mt-4 py-3 px-8 rounded-xl shadow-md bg-purple-800 text-white'>
					Free Register
				</button>
			</motion.div>
		</section>
	)
}

export default Feature1