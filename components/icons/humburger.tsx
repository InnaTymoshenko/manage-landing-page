import { IconProps } from '@/types/icon-type'

const Humburger = ({ className, ...props }: IconProps) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="25" height="18" className={className} {...props}>
			<g fill="#242D52" fillRule="evenodd">
				<path d="M0 0h25v4H0zM0 7h25v4H0zM0 14h25v4H0z" />
			</g>
		</svg>
	)
}

export default Humburger
