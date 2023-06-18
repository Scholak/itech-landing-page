import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import img1 from '../assets/appImgs/app_img_1.png'
import img2 from '../assets/appImgs/app_img_2.png'
import img3 from '../assets/appImgs/app_img_3.png'
import img4 from '../assets/appImgs/app_img_4.png'
import img5 from '../assets/appImgs/app_img_5.png'

const AppImages = () => {
	const ref = useRef(null)

	const isInView = useInView(ref, {once: true})

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
		<section className='container mx-auto py-20 flex flex-col gap-8 items-center md:flex-row md:flex-wrap md:justify-around' ref={ref}>
			<motion.img
				variants={variants}
				initial='hidden'
				animate={isInView ? 'visible' : 'hidden'}
				transition={{ duration: 1, delay: 1 }}
				src={img1}
				alt='app image'
			/>
			<motion.img
				variants={variants}
				initial='hidden'
				animate={isInView ? 'visible' : 'hidden'}
				transition={{ duration: 1, delay: 1.1 }}
				src={img2}
				alt='app image'
			/>
			<motion.img
				variants={variants}
				initial='hidden'
				animate={isInView ? 'visible' : 'hidden'}
				transition={{ duration: 1, delay: 1.2 }}
				src={img3}
				alt='app image'
			/>
			<motion.img
				variants={variants}
				initial='hidden'
				animate={isInView ? 'visible' : 'hidden'}
				transition={{ duration: 1, delay: 1.3 }}
				src={img4}
				alt='app image'
			/>
			<motion.img
				variants={variants}
				initial='hidden'
				animate={isInView ? 'visible' : 'hidden'}
				transition={{ duration: 1, delay: 1.4 }}
				src={img5}
				alt='app image'
			/>
		</section>
	)
}

export default AppImages
