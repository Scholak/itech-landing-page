import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaTelegram } from 'react-icons/fa'

const Social = () => {
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
		<section className='container mx-auto py-20' ref={ref}>
			<motion.div
				variants={variants}
				initial='hidden'
				animate={isInView ? 'visible' : 'hidden'}
				transition={{ duration: 1, delay: 1 }}
			>
				<h3 className='w-min whitespace-nowrap mx-auto rounded shadow mb-4 p-3 bg-gray-200 text-purple-800 text-center'>
					Notero Community
				</h3>
				<h2 className='mb-16 text-4xl font-bold text-center'>
					Join Into{' '}
					<span className=' bg-gradient-to-r from-purple-800 to-pink-400 bg-clip-text text-transparent'>
						Our Hub
					</span>
				</h2>
				<div className='container mx-auto flex flex-col items-center gap-16 justify-between p-8 rounded-xl border border-gray-500 text-gray-700 md:flex-row md:gap-0 md:p-20'>
					<div className='flex gap-3'>
						<FaGithub className='text-6xl' />
						<div className='flex flex-col justify-between'>
							<p className='text-3xl font-bold'>GitHub</p>
							<p>Open Source & Commit Code</p>
						</div>
					</div>
					<div className='flex gap-3'>
						<FaTwitter className='text-6xl' />
						<div className='flex flex-col justify-between'>
							<p className='text-3xl font-bold'>Twitter</p>
							<p>Latest News & Update</p>
						</div>
					</div>
					<div className='flex gap-3'>
						<FaTelegram className='text-6xl' />
						<div className='flex flex-col justify-between'>
							<p className='text-3xl font-bold'>Telegram</p>
							<p>Channel For Community </p>
						</div>
					</div>
				</div>
			</motion.div>
		</section>
	)
}

export default Social
