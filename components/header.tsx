'use client'

import { useState } from 'react'
import Link from 'next/link'
import Logo from './icons/logo'
import Button from './ui/button'
import Shell from './ui/shell'
import Humburger from './icons/humburger'
import Close from './icons/close'

type Props = {}

const Header = (props: Props) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<header className="w-full h-36 relative">
				<Shell className=" container h-full  flex justify-between items-center relative">
					<Link href={'/'}>
						<Logo className="fill-text-primary" />
					</Link>

					<div className="w-[35%] flex xl:text-md lg:flex lg:text-sm justify-between text-primary  sx:hidden">
						<Link href={'/pricing'} className="text-primary hover:text-secondary " onClick={() => setIsOpen(false)}>
							Pricing
						</Link>
						<Link href={'/product'} className="text-primary hover:text-secondary " onClick={() => setIsOpen(false)}>
							Product
						</Link>
						<Link href={'/about'} className="text-primary hover:text-secondary " onClick={() => setIsOpen(false)}>
							About Us
						</Link>
						<Link href={'/careers'} className="text-primary hover:text-secondary " onClick={() => setIsOpen(false)}>
							Careers
						</Link>
						<Link href={'/community'} className="text-primary hover:text-secondary " onClick={() => setIsOpen(false)}>
							Community
						</Link>
					</div>

					<Button
						text="Get Started"
						className="button bg-red-100 text-white hover:bg-red-100/60 lg:block md:hidden sm:hidden sx:hidden"
					/>
					{isOpen ? (
						<Close className="lg:hidden sx:block cursor-pointer z-10" onClick={() => setIsOpen(!isOpen)} />
					) : (
						<Humburger className="lg:hidden sx:block cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
					)}
				</Shell>
			</header>
			<div
				className={`lg:hidden absolute top-0 left-0 bottom-0  ${
					isOpen
						? 'sx:flex sx:justify-center sx:w-screen z-[5] sx:h-full sx:bg-gradient-modal absolute top-0 left-0'
						: 'sx:hidden'
				} `}
			>
				<div
					className={`w-[35%] flex xl:text-md lg:flex lg:text-sm justify-between text-primary  ${
						isOpen
							? 'bg-white h-[25rem] p-12 rounded-lg sx:flex-col w-[90%] m-auto  z-10 top-32 absolute items-center'
							: 'sx:hidden'
					}`}
				>
					<Link href={'/pricing'} className="text-primary hover:text-secondary " onClick={() => setIsOpen(false)}>
						Pricing
					</Link>
					<Link href={'/product'} className="text-primary hover:text-secondary " onClick={() => setIsOpen(false)}>
						Product
					</Link>
					<Link href={'/about'} className="text-primary hover:text-secondary " onClick={() => setIsOpen(false)}>
						About Us
					</Link>
					<Link href={'/careers'} className="text-primary hover:text-secondary " onClick={() => setIsOpen(false)}>
						Careers
					</Link>
					<Link href={'/community'} className="text-primary hover:text-secondary " onClick={() => setIsOpen(false)}>
						Community
					</Link>
				</div>
			</div>
		</>
	)
}

export default Header
