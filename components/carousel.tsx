'use client'
import React, { useCallback } from 'react'
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel'
import { DotButton, useDotButton } from './dot-carousel'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import ClientCard from './client-card'

type PropType = {
	slides: IReview[]
	options?: EmblaOptionsType
}

const Carousel: React.FC<PropType> = props => {
	const { slides, options } = props
	const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

	const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
		const autoplay = emblaApi?.plugins()?.autoplay
		if (!autoplay) return

		const resetOrStop = autoplay.options.stopOnInteraction === false ? autoplay.reset : autoplay.stop

		resetOrStop()
	}, [])

	const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi, onNavButtonClick)

	return (
		<section className="embla lg:w-[80%] sx:w-full sx:h-[25rem] ">
			<div className="embla__viewport" ref={emblaRef}>
				<div className="embla__container   h-[35vh] flex gap-16">
					{slides.map((slide, index) => (
						<div
							className="embla__slide flex flex-col justify-center gap-4 items-center p-4 bg-gray relative"
							key={index}
						>
							<ClientCard slide={slide} />
						</div>
					))}
				</div>
			</div>

			<div className="flex lg:hidden sx:flex justify-center m-6">
				<div className="embla__dots">
					{scrollSnaps.map((_, index) => (
						<DotButton
							key={index}
							onClick={() => onDotButtonClick(index)}
							className={'embla__dot'.concat(index === selectedIndex ? ' embla__dot--selected' : '')}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

export default Carousel
