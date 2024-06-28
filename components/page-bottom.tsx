import React from 'react'
import Button from './ui/button'

type Props = {}

const PageBottom = (props: Props) => {
	return (
		<section className="w-full lg:h-[14rem] bg-red-100 sx:h-[40vh]">
			<div className="container h-full flex gap-8 lg:flex-row sx:flex-col lg:justify-between items-center sx:justify-center">
				<h2 className="lg:w-[45%] md:w-[60%] sx:w-full sx:text-[2.2rem] lg:text-[2.6rem] sx:text-center lg:text-left text-white">
					Simplify how your team works today.
				</h2>
				<Button text="Get Started" className="button bg-white text-red-100 hover:text-red-100/60 " />
			</div>
		</section>
	)
}

export default PageBottom
