import Link from 'next/link';
import { GiMite } from 'react-icons/gi';
import { FaHome, FaInfoCircle, FaUserAlt, FaCode } from 'react-icons/fa';
import {MdSearch} from 'react-icons/md'
import CheckActiveLink from '../CheckActive';
import SearchBox from '../search/SearchBox';

const Header = () => {
	return (

		<>
		<header id="myheader" className='flex justify-between bg-cyan-600 p-8 sticky top-0 left-0 z-20 shadow-md
		'>
			<Link href='/'>
				<h3 className='text-2xl flex justify-center items-center text-white'>
					<GiMite className='inline-block mr-2 align-middle' />
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


					<CheckActiveLink hrefUrl='/search'>
						<MdSearch className='inline-block mr-2' />
						Search
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
					</>
	);
};
export default Header;
