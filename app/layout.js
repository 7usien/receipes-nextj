import Header from '@/components/header/Header';
import './globals.css';

export const metadata = {
	title: 'foodies Receipes app',
	description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>
				<Header />
				{children}
			</body>
		</html>
	);
}
