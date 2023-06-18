import React, { useRef, useState } from 'react'
import { FaAngleDown } from 'react-icons/fa'
import { FaArrowRight } from 'react-icons/fa'
import logo from '../assets/logo.png'
import user from '../assets/user.png'

const Navbar = () => {
	const [open, setOpen] = useState(false)

	const navEl = useRef()

	const handleToggle = () => {
		setOpen(!open)
		navEl.current.classList.toggle('-translate-x-full')
	}

  return (
		<>
			<div
				className='fixed top-4 right-4 z-50 flex flex-col gap-1 p-4 rounded-md shadow-lg bg-white cursor-pointer md:hidden'
				onClick={handleToggle}
			>
				<span
					className={`w-8 h-1 rounded-md bg-purple-800 transition duration-200 ${
						open ? 'rotate-45 translate-y-1.5' : ''
					}`}
				></span>
				<span
					className={`w-8 rounded-md bg-purple-800 transition duration-200 ${
						open ? 'h-0' : 'h-1'
					}`}
				></span>
				<span
					className={`w-8 h-1 rounded-md bg-purple-800 transition duration-200 ${
						open ? '-rotate-45 -translate-y-1.5' : ''
					}`}
				></span>
			</div>
			<nav
				className='navbar fixed top-0 h-screen w-full flex flex-col items-center justify-around px-8 bg-white transition duration-300 -translate-x-full md:flex-row md:h-min md:static md:py-12 md:translate-x-0 md:rounded-t-3xl'
				ref={navEl}
			>
				<img src={logo} alt='logo' className='w-3/4 md:max-h-10 md:w-min' />
				<ul className='flex flex-col gap-8 text-lg font-semibold text-gray-600 md:flex-row'>
					<li className='flex items-center gap-2 text-purple-800'>
						Home
						<FaAngleDown />
					</li>
					<li className='relative w-min flex items-center gap-2'>
						<span className='order-1 py-0.5 px-1 rounded bg-red-300 text-red-600 text-xs font-normal md:absolute md:right-0 md:-top-4'>
							Hot
						</span>
						Pages
						<FaAngleDown className='order-2' />
					</li>
					<li>Portfolio</li>
					<li>Blog</li>
					<li>Contact</li>
				</ul>
				<div className='flex items-center gap-4 text-gray-800'>
					<img src={user} alt='user icon' />
					<button className='flex items-center justify-center gap-4 py-1 px-2 rounded-3xl border border-gray-800'>
						Join ITech Hub
						<FaArrowRight />
					</button>
				</div>
			</nav>
		</>
	)
}

export default Navbar
