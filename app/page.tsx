import Greeting from '@/components/greeting'
import About from '@/components/about'
import Comments from '@/components/comments'
import PageBottom from '@/components/page-bottom'

export default function Home() {
	return (
		<div className="w-screen relative flex min-h-screen flex-col items-center justify-between gap-32 ">
			<Greeting />
			<About />
			<Comments />
			<PageBottom />
		</div>
	)
}
