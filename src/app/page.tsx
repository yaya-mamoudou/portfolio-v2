import AnimatedSkills from '~/components/animated-skills';
import Hero from '~/components/hero';
import Navbar from '~/components/navbar';
import Projects from '~/components/projects';
import Skills from '~/components/skills';
import Work from '~/components/work';

export default function Home() {
	return (
		<div className=''>
			<Navbar />
			<Hero />
			<div className='py-4'>
				<AnimatedSkills />
			</div>
			<Projects />
			<Work />
			<Skills />
		</div>
	);
}
