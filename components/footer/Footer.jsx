


import {MdVerticalAlignTop} from 'react-icons/md'
import { usePathname } from 'next/navigation';
export default function Footer() {

	return (
		<footer className='bg-gray-600 py-4 text-white text-center relative'>
			Developed by : Husien Adel - 2023
			
				<a href='#myheader' className='text-center mr-auto ml-auto block w-fit  bg-yellow-600 text-white p-2 rounded-full shadow-xl, shadow-2xl absolute top-4 right-4 transition-all hover:bg-slate-900'>
				<MdVerticalAlignTop />
				</a>
				
		</footer>
	);
}
