import Link from 'next/link'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	text?: string
	href?: string
}

const Button = ({ className, text, href, ...props }: ButtonProps) => {
	return (
		<button className={className} {...props}>
			<Link href={`${href}`}>{text}</Link>
		</button>
	)
}

export default Button
