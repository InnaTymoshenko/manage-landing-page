import Button from './ui/button'
import Tablet from './icons/tablet'
import Illustration from './icons/illustration'

type Props = {}

const Greeting = (props: Props) => {
	return (
		<section className="w-full lg:h-[80vh] relative flex lg:flex-row justify-between gap-20 container sx:flex-col-reverse sx:h-[160vh]">
			<div className="lg:w-[45%] sx:w-[80%] sx:mx-auto lg:mx-0 h-full flex flex-col justify-start mt-28 lg:items-start sx:items-center  gap-8 sm:w-full">
				<h1 className="sx:text-[3.2em] lg:text-[3.6em] lg:text-left sx:text-center">
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

				<Illustration className="lg:w-full sx:w-[115%] h-full absolute left-[-3rem] top-[3rem]" />
			</div>
			<Tablet className="lg:hidden sx:block absolute z-[-1] top-[39rem] left-[17rem] " />
		</section>
	)
}

export default Greeting
