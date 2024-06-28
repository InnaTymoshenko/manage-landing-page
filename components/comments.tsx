import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import Button from './ui/button'
import Carousel from './carousel'
import { reviews } from '@/data/index'

const OPTIONS: EmblaOptionsType = { loop: true }

type Props = {}

const Comments = (props: Props) => {
	return (
		<section className="w-full lg:h-[70vh] sx:h-[80%]  flex flex-col justify-between items-center gap-8 my-20  ">
			<h2 className="sx:text-[2.2rem] lg:text-[2.6rem]">What they’ve said</h2>
			<div className="h-[45%] relative flex justify-center mt-16 m-0 gap-8 ">
				<Carousel slides={reviews} options={OPTIONS} />
			</div>
			<Button text="Get Started" className="button bg-red-100 text-white hover:bg-red-100/60" />
		</section>
	)
}

export default Comments
