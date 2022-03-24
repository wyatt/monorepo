import { AppProps } from 'next/app';
import { SWRConfig } from 'swr';
import { fetcher } from '../utils/network';

const App = ({Component, pageProps}: AppProps) => {

	return (
		<SWRConfig
			value={{
				fetcher(url) {
					return fetcher('GET', url).then(res => res.data);
				},
				refreshInterval: 120 * 1000,
				dedupingInterval: 120 * 1000,
				errorRetryInterval: 120 * 1000,
				focusThrottleInterval: 120 * 1000,
			}}
		>
			
						<Component {...pageProps} />
</SWRConfig>
	);
};


export default App;
