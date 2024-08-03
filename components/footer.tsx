import Link from 'next/link'
import Logo from './icons/logo'
import { Socials } from './ui/social'
import MailControl from './mail-control'

type Props = {}

const Footer = (props: Props) => {
	return (
		<footer className="w-full lg:h-[15rem] bg-blue-300 text-white sx:h-[100vh] sx:p-4">
			<div className="container px-0 h-full py-12 flex lg:flex lg:flex-row gap-4 justify-between items-center sx:flex-col-reverse">
				<p className="lg:hidden sx:block text-sm">Copyright 2020. All Rights Reserved</p>
				<div className="w-[60%] h-full flex lg:flex-row justify-between sx:w-full sx:flex-col-reverse sx:items-center ">
					<div className="lg:w-[23%] lg:h-full flex  lg:flex-col justify-between py-2 sx:h-[10rem] sx:items-center sx:w-full sx:flex-col-reverse">
						<Logo className="fill-text-white " />
						<div className="flex gap-4 justify-between items-center">
							<Socials.facebook className="lg:w-[25px] lg:h-[25px] sx:w-[50px] sx:h-[50px] cursor-pointer hover:fill-red-100" />
							<Socials.youtube className="lg:w-[25px] lg:h-[25px] sx:w-[50px] sx:h-[50px] cursor-pointer hover:fill-red-100" />
							<Socials.twitter className="lg:w-[25px] lg:h-[25px] sx:w-[50px] sx:h-[50px] cursor-pointer hover:fill-red-100" />
							<Socials.pinterest className="lg:w-[25px] lg:h-[25px] sx:w-[50px] sx:h-[50px] cursor-pointer hover:fill-red-100" />
							<Socials.instagram className="lg:w-[25px] lg:h-[25px] sx:w-[50px] sx:h-[50px] cursor-pointer hover:fill-red-100" />
						</div>
					</div>
					<div className="lg:w-[60%] lg:h-full  grid grid-cols-2 grid-rows-4 lg:justify-items-start gap-4 sx:w-full sx:h-[15rem] sx:justify-items-center">
						<Link href={'/'} className="font-bold text-gray hover:text-red-100 ">
							Home
						</Link>
						<Link href={'/careers'} className="font-bold text-gray hover:text-red-100 ">
							Careers
						</Link>
						<Link href={'/pricing'} className="font-bold text-gray hover:text-red-100 ">
							Pricing
						</Link>
						<Link href={'/community'} className="font-bold text-gray hover:text-red-100 ">
							Community
						</Link>
						<Link href={'/product'} className="font-bold text-gray hover:text-red-100 ">
							Product
						</Link>
						<Link href={'/'} className="font-bold text-gray hover:text-red-100 ">
							Privacy Policy
						</Link>
						<Link href={'/about'} className="font-bold text-gray hover:text-red-100 ">
							About Us
						</Link>
					</div>
				</div>
				<div className="lg:w-[30%] lg:h-full md:w-[80%] md:m-auto sx:w-full sx:h-[10rem] flex flex-col justify-between items-end">
					<MailControl />
					<p className="lg:block sx:hidden text-sm ">Copyright 2020. All Rights Reserved</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
