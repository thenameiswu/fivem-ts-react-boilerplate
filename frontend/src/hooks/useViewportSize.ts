import { useCallback, useState } from 'react';
import { useWindowEvent } from './useWindowEvent';

const browser = typeof window !== 'undefined';

export function useViewportSize() {
	const [windowSize, setWindowSize] = useState({
		width: browser ? window.innerWidth : 0,
		height: browser ? window.innerHeight : 0,
	});

	const setSize = useCallback(() => {
		setWindowSize({ width: window.innerWidth || 0, height: window.innerHeight || 0 });
	}, []);

	useWindowEvent('resize', setSize, { passive: true });
	useWindowEvent('orientationchange', setSize, { passive: true });

	return windowSize;
}
