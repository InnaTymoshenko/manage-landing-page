'use client'

import React, { useState } from 'react'
import { UserShema } from '@/utils/validation/schema'
import { ZodFormattedError } from 'zod'

type Props = {}

const MailControl = (props: Props) => {
	const [value, setValue] = useState('')
	const [user, setUser] = useState<IUser>({
		email: ''
	})
	const [errors, setErrors] = useState<
		ZodFormattedError<
			{
				email: string
			},
			string
		>
	>({ _errors: [] })

	const handleSubmit: React.FormEventHandler<HTMLFormElement> = e => {
		e.preventDefault()
		const userEmail = {
			email: value
		}
		const validationResult = UserShema.safeParse(userEmail)
		if (!validationResult.success) {
			const errors = validationResult.error.format()
			setErrors(errors)
		} else {
			setUser(userEmail)
		}
		setValue('')
	}

	const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
		setValue(e.target.value)
		if (errors.email) {
			delete errors.email
			setErrors(errors)
		}
	}

	return (
		<div className="w-[100%] lg:h-[80%]  md:m-auto sx:w-full sx:h-[8rem]">
			<form
				action=""
				onSubmit={handleSubmit}
				className="w-full lg:h-[60%] sx:h-[50%] sx:mb-2 flex justify-between gap-4 px-2"
			>
				<input
					type="text"
					placeholder="Updates in your inbox..."
					value={value}
					onChange={handleChange}
					className={`w-[70%] p-4 rounded-full text-red-100 border-blue-300 ${
						errors.email && `border-2 border-red-100`
					}`}
				/>

				<input type="submit" value={'Go'} className="w-[25%] h-full bg-red-100 rounded-full cursor-pointer" />
			</form>
			{errors.email && <span className="text-red-100 text-md px-8 italic ">{errors.email?._errors}</span>}
		</div>
	)
}

export default MailControl
