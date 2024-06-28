import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import Tablet from './icons/tablet'
import { services } from '../data/index'
import Services from './services'

type Props = {}

const About = (props: Props) => {
	return (
		<section className="w-full lg:h-[70vh] sx:h-[90vh]  flex lg:flex-row sx:flex-col justify-between gap-20 container">
			<div className="lg:w-[45%] md:w-[80%] gap-8 sx:w-full sx:text-center mx-auto lg:h-full sx:h-[15rem] flex flex-col relative justify-start">
				<h2 className="sx:text-[2rem] lg:text-[2.6rem] lg:text-left sx:text-center">What’s different about Manage?</h2>
				<p className="lg:w-[65%] sx:w-full pr-2  lg:text-[1.1em] sx:text-[1em] lg:text-left sx:text-center">
					Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for
					modern digital product teams.
				</p>
				<Tablet className="lg:block sx:hidden absolute z-[-1] top-[18rem] left-[-38rem] " />
			</div>
			<div className="lg:w-[50%] sx:w-full lg:h-full sx:h-[30rem] flex flex-col justify-between">
				{services.map((s, i) => {
					return (
						<div key={uuidv4()} className="w-[100%] flex lg:flex-row sx:flex-col gap-4 justify-between">
							<Services item={s} index={i} />
						</div>
					)
				})}
			</div>
		</section>
	)
}

export default About
