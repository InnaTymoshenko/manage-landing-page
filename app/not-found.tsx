import Button from '@/components/ui/button'
import React from 'react'

type Props = {}

const NotFound = (props: Props) => {
	return (
		<div className="w-full h-[60vh] flex flex-col gap-8 justify-center items-center">
			<h1 className="text-red-100 text-5xl">Error 404</h1>
			<p className="text-red-100 text-lg">Page not found</p>
			<Button text="Go back" className="button bg-red-100 text-white hover:bg-red-100/60" href="/" />
		</div>
	)
}

export default NotFound
