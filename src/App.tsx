import React, { PureComponent /* CSSProperties */ } from 'react';
import 'reset-css';
import './App.css';

import { Theme } from '@teambit/base-ui.theme.theme-provider';

import { EvaIconFont } from './theme/icon-font';

import { HybridHomepage } from './pages/hybrid-homepage';
import { EnterpriseOffering } from './pages/enterprise-offering';
import { ComponentHighlighter } from './dev-tools/component-highlighter';
import versionMap from './content/version-map/version-map';
import { SupportPage } from './pages/support';

class App extends PureComponent {
	render() {
		return (
			<Theme>
				<ComponentHighlighter
					active
					versionMap={versionMap}
					fullScopeName={false}
					motionTracking
				>
					<EvaIconFont query="aqq93z" />
					<HybridHomepage githubStars={10000} />
					<EnterpriseOffering
						onBookMeeting={() => alert('book meeting')}
						onSubmitCta={(values) => {
							alert(JSON.stringify(values));
							return Promise.resolve();
						}}
					/>
					<SupportPage />
				</ComponentHighlighter>
			</Theme>
		);
	}
}

export default App;
