'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const CheckActiveLink = ({ hrefUrl, classes, children }) => {
	const router = usePathname();
	return (
		<Link
			href={hrefUrl}
			className={`${classes ? classes : ''} ${hrefUrl === router ? 'active' : ''}`}>
			{children}
		</Link>
	);
};

export default CheckActiveLink;
