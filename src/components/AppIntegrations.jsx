import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import bg from '../assets/appIntegrations/integration_apps_bubbles.png'
import dropbox from '../assets/appIntegrations/app_dropbox.png'
import zeplin from '../assets/appIntegrations/app_zeplin.png'
import paypal from '../assets/appIntegrations/app_paypal.png'
import googleCalendar from '../assets/appIntegrations/app_google_calendar.png'
import slack from '../assets/appIntegrations/app_slack.png'

const AppIntegrations = () => {
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
		<section className='relative bg-white py-20' ref={ref}>
			<motion.div
				variants={variants}
				initial='hidden'
				animate={isInView ? 'visible' : 'hidden'}
				transition={{ duration: 1, delay: 1 }}
			>
				<img
					src={bg}
					alt=''
					className='absolute hidden top-16 left-1/2 -translate-x-1/2 md:block'
				/>
				<h3 className='w-min whitespace-nowrap mx-auto rounded shadow mb-4 p-3 bg-gray-200 text-purple-800 text-center'>
					One-Time Payment
				</h3>
				<h2 className='mb-3 text-4xl font-bold text-center'>
					Integration With{' '}
					<span className=' bg-gradient-to-r from-purple-800 to-pink-400 bg-clip-text text-transparent'>
						Popular Apps
					</span>
				</h2>
				<p className='text-center text-sm text-gray-500 z-10'>
					Notero integrate with popular apps. Help you easy to connect and
					collaboration
				</p>
				<div className='container mx-auto mt-8 md:mt-0'>
					<div className='w-full flex flex-col gap-8 justify-between items-center mb-8 md:flex-row md:mb-0'>
						<motion.img
							variants={variants}
							initial='hidden'
							animate={isInView ? 'visible' : 'hidden'}
							transition={{ duration: 1, delay: 1.4 }}
							src={dropbox}
							alt='app'
							className='z-10'
						/>
						<motion.img
							variants={variants}
							initial='hidden'
							animate={isInView ? 'visible' : 'hidden'}
							transition={{ duration: 1, delay: 1.5 }}
							src={zeplin}
							alt='app'
							className='z-10'
						/>
						<motion.img
							variants={variants}
							initial='hidden'
							animate={isInView ? 'visible' : 'hidden'}
							transition={{ duration: 1, delay: 1.6 }}
							src={paypal}
							alt='app'
							className='z-10'
						/>
					</div>
					<div className='w-full flex flex-col gap-8 justify-around items-center md:flex-row'>
						<motion.img
							variants={variants}
							initial='hidden'
							animate={isInView ? 'visible' : 'hidden'}
							transition={{ duration: 1, delay: 1.7 }}
							src={googleCalendar}
							alt='app'
							className='z-10'
						/>
						<motion.img
							variants={variants}
							initial='hidden'
							animate={isInView ? 'visible' : 'hidden'}
							transition={{ duration: 1, delay: 1.8 }}
							src={slack}
							alt='app'
							className='z-10'
						/>
					</div>
				</div>
			</motion.div>
		</section>
	)
}

export default AppIntegrations
