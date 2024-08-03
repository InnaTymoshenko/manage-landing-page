/* eslint-disable @next/next/no-img-element */
import Button from './ui/button'
import Tablet from './icons/tablet'

type Props = {}

const Greeting = (props: Props) => {
	return (
		<section className="w-full lg:h-[80vh] relative flex lg:flex-row justify-between lg:gap-20 sx:gap-8 container sx:flex-col-reverse sx:h-[110vh]">
			<div className="lg:w-[45%] sx:w-full sx:mx-auto lg:mx-0 h-full flex flex-col justify-start lg:mt-28 sx:mt-0 lg:items-start sx:items-center  lg:gap-8 sx:gap-4 sm:w-full">
				<h1 className="sx:text-[2.4em] lg:text-[3.6em] lg:text-left sx:text-center">
					Bring everyone together to build better products.
				</h1>
				<p className="lg:w-[65%] sx:w-full pr-2 lg:text-[1.1em] sx:text-[1.4em] ">
					Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in
					view.
				</p>
				<Button text="Get Started" className="button bg-red-100 text-white hover:bg-red-100/60" />
			</div>
			<div className="lg:w-[50%] sx:w-full h-full flex justify-center relative lg:pt-20 sx:p-0 ">
				<Tablet className="absolute z-[-1] top-[-17rem] left-12 " />
				<div className="w-full">
					<img src="/illustration-intro.svg" alt="" />
				</div>
			</div>
			<Tablet className="lg:hidden sx:block absolute z-[-1] top-[39rem] left-[17rem] " />
		</section>
	)
}

export default Greeting
