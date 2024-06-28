import { IService } from '@/types/services-type'

type Services = {
	item: IService
	index: number
}

const Services = ({ item, index }: Services) => {
	return (
		<>
			<div className="w-[10%] h-[2.5rem] bg-red-100 text-gray flex lg:flex sx:hidden justify-center items-center text-lg rounded-[2rem]">
				{`0${index + 1}`}
			</div>
			<div className="w-[85%] flex lg:flex sx:hidden flex-col gap-4 justify-between">
				<h3 className="mt-2">{item.title}</h3>
				<p className="w-[85%]">{item.description}</p>
			</div>

			<div className="w-full flex relative lg:hidden sx:flex flex-row justify-start items-center">
				<div className="w-[15%] h-[2.5rem] bg-red-100 text-gray flex justify-center items-center text-lg rounded-[2rem]">
					{`0${index + 1}`}
				</div>
				<h3 className="mt-2 pt-2 w-full left-[12%] z-[-1] bg-red-200 px-8 h-[2.5rem] rounded-[2rem] absolute">
					{item.title}
				</h3>
			</div>
			<p className="w-full text-[1em] lg:hidden sx:block">{item.description}</p>
		</>
	)
}

export default Services
