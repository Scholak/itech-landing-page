import React from 'react'
import { FaChevronDown } from 'react-icons/fa'
import { FaRegCopyright } from 'react-icons/fa'
import logo from '../assets/logo.png'
import usFlag from '../assets/us_flag.png'

const Footer = () => {
  return (
		<footer className='container mx-auto py-12 md:py-20'>
			<div className='flex flex-col items-center justify-between gap-12 mb-8 pb-8 border-b border-gray-500 md:flex-row md:gap-0 md:pb-4'>
				<img src={logo} alt='logo' />
				<ul className='flex flex-col items-center gap-6 font-semibold text-lg text-gray-700 md:flex-row md:gap-10'>
					<li className='text-purple-700'>Home</li>
					<li>Pages</li>
					<li>Portfolio</li>
					<li>Blog</li>
					<li>Contact</li>
				</ul>
				<div className='flex items-center gap-2'>
					<img src={usFlag} alt='flag' />
					<span>English</span>
					<FaChevronDown className='cursor-pointer' />
				</div>
			</div>
			<div className='flex items-center justify-center gap-2 text-gray-600 text-sm md:text-base'>
				<FaRegCopyright />
				<p>
					2023 copyrights by{' '}
					<span className='font-semibold text-gray-700'>ITech</span>
          . All Rights Reserved.
				</p>
			</div>
		</footer>
	)
}

export default Footer
