import React from 'react';
import SectionTitle from './section-title';
import LanguageIcon from './icons/language-icon';
import { spokenLanguages } from '~/mock';

export default function Language() {
	return (
		<div className='container-2 px-6 pb-20'>
			<SectionTitle icon={<LanguageIcon />} title='Spoken Languages' />

			<div className='space-y-2'>
				{spokenLanguages.map((lang) => (
					<div
						key={lang.lang}
						className='border md:w-1/2 xl:w-1/4 border-border flex justify-between bg-white rounded-2xl px-6 py-3'
					>
						<div className='text-black font-semibold text-sm'>{lang.lang}</div>
						<div className='text-sm'>{lang.competence}</div>
					</div>
				))}
			</div>
		</div>
	);
}
