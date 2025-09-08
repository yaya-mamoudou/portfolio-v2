'use client';
import { Button } from '@heroui/button';
import {
	Navbar as Nav,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
} from '@heroui/navbar';
import { cn } from '@heroui/theme';
import Link from 'next/link';
import { Fragment, useState } from 'react';
import { languages, navLinks } from '~/mock';
import CaretIcon from './icons/caret-icon';

export const AcmeLogo = () => {
	return (
		<svg fill='none' height='36' viewBox='0 0 32 32' width='36'>
			<path
				clipRule='evenodd'
				d='M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z'
				fill='currentColor'
				fillRule='evenodd'
			/>
		</svg>
	);
};

export default function Navbar() {
	const [activeLanguage, setActiveLanguage] = useState(languages[0].label);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<div className='container mx-auto z-50'>
			<Nav classNames={{ wrapper: 'h-[3rem] max-w-full' }} className='text-black py-4 '>
				<NavbarBrand>
					<AcmeLogo />
					<p className='font-bold text-inherit text-xl'>Yaya Mamoudou</p>
				</NavbarBrand>

				<NavbarContent
					className='hidden px-10  border rounded-full border-border lg:flex gap-4 '
					justify='center'
				>
					{navLinks.map((item) => (
						<NavbarItem as={Link} href={item.link} key={item.label}>
							{item.label}
						</NavbarItem>
					))}
				</NavbarContent>

				<NavbarContent className='flex gap-4' justify='end'>
					<NavbarMenuToggle
						aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
						className='min-w-[100px] lg:hidden rounded-full border-border border h-[3rem]'
						icon={
							<div className='flex px-3 items-center gap-x-1'>
								Menu <CaretIcon />
							</div>
						}
					/>
					<NavbarMenu>
						{navLinks.map((item) => (
							<NavbarMenuItem key={item.label}>
								<Link href={item.link}>{item.label}</Link>
							</NavbarMenuItem>
						))}
					</NavbarMenu>
					<NavbarItem className='hidden lg:flex gap-x-3 items-center'>
						{languages.map((lang, index) => (
							<Fragment key={index}>
								<Button
									onPress={() => setActiveLanguage(lang.label)}
									className={cn(
										activeLanguage !== lang.label && 'text-[#939393]',
										'cursor-pointer bg-transparent px-2 min-w-auto min-h-fit'
									)}
								>{`${lang.flag}${lang.label}`}</Button>
								{index + 1 !== languages.length && <div>|</div>}
							</Fragment>
						))}
					</NavbarItem>
				</NavbarContent>
			</Nav>
		</div>
	);
}
