import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import techNews from '../assets/companies/company_tech_news.png'
import helloWorld from '../assets/companies/company_hello_world.png'
import ITBlog from '../assets/companies/company_it_blog.png'
import digiTek from '../assets/companies/company_digi_tek.png'
import teckRown from '../assets/companies/company_teckrown.png'

const Companies = () => {
	const ref = useRef(null)
	
	const isInView = useInView(ref, { once: true })

	const variants = {
		hidden: {
			opacity: 0,
			y: 75
		},
		visible: {
			opacity: 1,
			y: 0
		}
	}

  return (
		<section className='py-20 bg-white' ref={ref}>
			<motion.div
				variants={variants}
				initial='hidden'
				animate={isInView ? 'visible' : 'hidden'}
				transition={{ duration: 1, delay: 2 }}
			>
				<h3 className='mb-12 px-2 font-semibold text-2xl text-center text-gray-800'>
					<span className='text-purple-800'>25K+ Installation</span> and
					featured on
				</h3>
				<div className='grid grid-cols-1 gap-16 place-items-center md:grid-cols-2 md:gap-8 lg:grid-cols-5 lg:gap-4'>
					<img src={techNews} alt='company' />
					<img src={helloWorld} alt='company' />
					<img src={ITBlog} alt='company' />
					<img src={digiTek} alt='company' />
					<img src={teckRown} alt='company' />
				</div>
				<span className='block w-full h-px mt-10 bg-gray-600'></span>
			</motion.div>
		</section>
	)
}

export default Companies
