import Image from 'next/image';
import React from 'react';
import GithubIcon from '../icons/github-icon';
import LinkedinIcon from '../icons/linkedin-icon';
import XIcon from '../icons/x-icon';
import MailIcon from '../icons/mail-icon';
import ArrowIcon from '../icons/arrow-icon';
import Link from 'next/link';
import { Button } from '@heroui/button';

export default function Hero() {
	return (
		<div className='relative  min-h-[80vh] flex '>
			<HeroBaground />
			<div className='container-2 mx-auto h-full my-auto px-6  flex-col '>
				<div className='flex h-full z-10 justify-center relative items-center '>
					<div className='flex flex-col py-10 justify-center items-center lg:flex-row lg:items-end gap-x-14'>
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
		<Image
			src='/images/hero.png'
			alt='Hero'
			className='w-1/2 lg:w-[400]'
			width={400}
			height={500}
		/>
	);
};

const HeroBaground = () => (
	<Image
		src='/images/abstract-shape-1.svg'
		alt='Hero'
		className='size-full absolute -top-14'
		width={500}
		height={500}
	/>
);

const HeroContent = () => {
	return (
		<div className='flex-1 space-y-6 flex flex-col items-center lg:mt-0 mt-10 lg:items-start'>
			<h1 className='text-3xl text-center lg:text-left md:text-5xl xl:text-7xl font-bold text-black'>
				Senior <br /> Full Stack Developer
			</h1>
			<p className=' text-center lg:text-left'>
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

			<Button
				endContent={<ArrowIcon />}
				as={Link}
				href='#'
				className='text-accent bg-transparent font-bold flex items-center gap-x-2'
			>
				Contact Me
			</Button>
		</div>
	);
};
