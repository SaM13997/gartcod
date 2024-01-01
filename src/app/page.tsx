import Image from 'next/image'
import gradiantImage from '../public/images/gradiant.svg'

export default function Home() {
	return (
		<main className="relative flex flex-col bg-red-400 w-full h-screen">
			{/* <img
				className="absolute w-full h-full inset-0"
				src="../public/images/gradiant.png"
				alt="asasd"
			/> */}
			<div className="first bg-yellow-100">
				<img src="a" alt="" />
			</div>
			<div className="second"></div>
			<div className="third"></div>
		</main>
	)
}
