import { Fragment, useState } from 'react';
import { useViewportSize } from '../hooks/useViewportSize';

export default function App() {
	const [isDisplayed, setIsDisplayed] = useState<boolean>(true);

	const { width, height } = useViewportSize();

	return (
		<Fragment>
			<p
				style={{
					visibility: isDisplayed ? 'visible' : 'hidden',
				}}
			>
				{`width: ${width} height ${height}`}
			</p>
		</Fragment>
	);
}
