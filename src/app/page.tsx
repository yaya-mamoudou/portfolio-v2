import Image from 'next/image';
import Hero from '~/components/hero';
import Navbar from '~/components/navbar';
import AnimatedSkills from '~/components/animated-skills';

export default function Home() {
	return (
		<div className=''>
			<Navbar />
			<Hero />
			<div className='py-8'>
				<AnimatedSkills />
			</div>
		</div>
	);
}
