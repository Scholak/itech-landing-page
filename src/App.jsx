import React from 'react'
import Discount from './components/Discount'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Companies from './components/Companies'
import Features from './components/Features'
import Feature1 from './components/Feature1'
import Feature2 from './components/Feature2'
import Feature3 from './components/Feature3'
import AppIntegrations from './components/AppIntegrations'
import AppImages from './components/AppImages'
import Reviews from './components/Reviews'
import Social from './components/Social'
import Download from './components/Download'
import Footer from './components/Footer'

const App = () => {
	return (
		<div className='overflow-hidden'>
			<Discount />
			<header>
				<Navbar />
				<Hero />
			</header>
			<main>
				<Companies />
				<Features />
				<Feature1 />
				<Feature2 />
				<Feature3 />
				<AppIntegrations />
				<AppImages />
				<Reviews />
				<Social />
				<Download />
			</main>
			<Footer />
		</div>
	)
}

export default App
