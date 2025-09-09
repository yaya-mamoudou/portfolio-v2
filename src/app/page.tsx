import AnimatedSkills from '~/components/animated-skills';
import Education from '~/components/education';
import Hero from '~/components/hero';
import Language from '~/components/language';
import Navbar from '~/components/navbar';
import Projects from '~/components/projects';
import Skills from '~/components/skills';
import Volunteerism from '~/components/volunteerism';
import Work from '~/components/work';

export default function Home() {
	return (
		<div className=''>
			<Navbar />
			<Hero />
			<div className='py-4'>
				<AnimatedSkills />
			</div>
			<Work />
			<Projects />
			<Skills />
			<Volunteerism />
			<Education />
			<Language />
		</div>
	);
}
