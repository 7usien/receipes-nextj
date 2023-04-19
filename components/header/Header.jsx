import Link from 'next/link';
import { GiMite } from 'react-icons/gi';
import { FaHome, FaInfoCircle, FaUserAlt, FaCode } from 'react-icons/fa';
import CheckActiveLink from '../CheckActive';

const Header = () => {
	return (
		<header className='flex justify-between bg-gray-400 p-8'>
			<Link href='/'>
				<h3 className='text-2xl'>
					<GiMite className='inline-block mr-2' />
					Foodies
				</h3>
			</Link>

			<nav>
				<ul className='flex justify-around gap-4 align-middle text-xl text-white'>
					<CheckActiveLink hrefUrl='/'>
						<FaHome className='inline-block mr-2' />
						Home
					</CheckActiveLink>

					<CheckActiveLink hrefUrl='/about'>
						<FaInfoCircle className='inline-block mr-2' />
						about
					</CheckActiveLink>

					<CheckActiveLink hrefUrl='/login'>
						<FaUserAlt className='inline-block mr-2' />
						login
					</CheckActiveLink>

					<CheckActiveLink hrefUrl='/code'>
						<FaCode className='inline-block mr-2' />
						code
					</CheckActiveLink>
				</ul>
			</nav>
		</header>
	);
};
export default Header;
