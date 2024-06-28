import React from 'react'
import Image from 'next/image'

const ClientCard = ({ slide }: { slide: IReview }) => {
	return (
		<React.Fragment>
			<Image src={slide.image} alt={'ali'} width={80} height={80} className="absolute top-[-3rem] left-[43%] " />
			<h3>{slide.name}</h3>
			<p className="text-center lg:text-[1.1em] sx:text-[1em]">“{slide.review}”</p>
		</React.Fragment>
	)
}

export default ClientCard
