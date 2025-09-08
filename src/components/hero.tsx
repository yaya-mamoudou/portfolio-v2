import Image from 'next/image';
import React from 'react';
import GithubIcon from './icons/github-icon';
import LinkedinIcon from './icons/linkedin-icon';
import XIcon from './icons/x-icon';
import MailIcon from './icons/mail-icon';
import ArrowIcon from './icons/arrow-icon';
import Link from 'next/link';

export default function Hero() {
	return (
		<div className='relative'>
			<Image
				src='/images/abstract-shape-1.svg'
				alt='Hero'
				className='h-full z-0 w-full absolute top-0 '
				width={0}
				height={0}
			/>
			<div className='container mx-auto  h-screen flex-col '>
				<div className='flex px-32 h-full z-20 justify-center relative items-center '>
					<div className='flex items-end gap-x-14'>
						<HeroImage />
						<HeroContent />
					</div>
				</div>
			</div>
		</div>
	);
}

const HeroImage = () => {
	return (
		<div className=''>
			<Image src='/images/hero.png' alt='Hero' className='size-full' width={400} height={500} />
		</div>
	);
};

const HeroContent = () => {
	return (
		<div className='flex-1 space-y-6'>
			<h1 className='text-7xl font-bold text-black'>
				Senior <br /> Full Stack Developer
			</h1>
			<p className=''>
				Hi, I’m Yaya Mamoudou — a software developer who loves turning ideas into real-world
				applications. From intuitive user interfaces to reliable backend systems, I enjoy building
				products that make a difference. I’m fluent in both English and French, which helps me
				collaborate across diverse teams and communities.
			</p>
			<Links />
		</div>
	);
};

const Links = () => {
	return (
		<div className='flex gap-x-4 items-center'>
			<Link href='https://www.github.com/yaya-mamoudou' target='_blank'>
				<GithubIcon />
			</Link>
			<Link href='https://www.linkedin.com/in/yaya-mamoudou' target='_blank'>
				<LinkedinIcon />
			</Link>
			<Link href='https://x.com/yayamamoudou0' target='_blank'>
				<XIcon />
			</Link>
			<Link href='mailto:yayamamoudou0@gmail.com'>
				<MailIcon />
			</Link>

			<div className='text-accent font-bold flex items-center gap-x-2'>
				Contact Me <ArrowIcon />
			</div>
		</div>
	);
};
