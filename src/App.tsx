import React from 'react';
import classNames from 'classnames';
//@ts-ignore
// import {CommentCarousel, carouselContent} from "@bit/bit.web.components.comment-carousel";
import './App.css';

import { Paragraph } from './components/base/paragraph';
import { Label } from './components/base/label';
import { MarketingCard } from './components/concrete/marketing-card';
// import { Separator } from "./components/base/separator";
import { Theme } from './themes/theme-provider';
import { PossibleSizes } from './constants/sizes';
import { H1, H2, H5 } from './components/concrete/heading';
// import {GithubLink} from './components/concrete/community-links';
import { EmbedIconSet } from './components/concrete/icon';
import { Fold1 } from './folds/fold1';
import { Fold3 } from './folds/fold3';
import { Fold4 } from './folds/fold4';
import { Fold5 } from './folds/fold5';
import { Fold6 } from './folds/fold6';
import styles from './app-concrete.module.scss';
import { CommunityFold } from './folds/community';
import { CtaFold } from './folds/cta';
import { ReuseFold } from './folds/reuse';

const App = () => {
	return (
		<Theme>
			<EmbedIconSet query="aqq93z" />
			<Fold1 />
			<Boxes />
			<div className={styles.fold2}>
				{/* <div className={classNames(styles.maxWidth)}> */}
				<H2 size={PossibleSizes.xs}>Trusted by over 100,000 developers</H2>
				{/* </div> */}
				{/* <CommentCarousel content={carouselContent} /> */}
			</div>
			<Fold3 />
			{/* <div className={styles.bla}>
        <Separator layout='vertical' />
        </div> */}

			<Fold4 />
			<Fold5 />
      <Fold6 />
			<ReuseFold />
			<CommunityFold />
			<CtaFold />
		</Theme>
	);
};

export default App;

const Boxes = () => {
	return (
		<div className={styles.boxes}>
			<MarketingCard
				ctaColor={'purple'}
				linkText="learn more"
				label="Develop"
				title="Build UI apps in decoupled codebases"
			>
				Develop components in simple, decoupled codebases. Make each codebase simpler to
				build, test and maintain
			</MarketingCard>
			<MarketingCard
				ctaColor={'lightgreen'}
				linkText="learn more"
				label="Build"
				title="Empower autonomous teams to deliver"
			>
				Empower every team to independently build their components in their own
				codebase. Let each team integrate and deploy components
			</MarketingCard>
			<MarketingCard
				ctaColor={'blue'}
				linkText="learn more"
				label="Deploy"
				title="Continuously integrate and deploy components"
			>
				Continuously integrate and deploy components and updates. Leverage per-component
				CI/CD for a faster release cycle
			</MarketingCard>
			<MarketingCard
				ctaColor={'hotpink'}
				linkText="learn more"
				label="Reuse"
				title="Reuse everything in a collaborative ecosystem"
			>
				Make all your components reusable in a collaborative ecosystem. Make it easy for
				everyone to share, discover and use every
			</MarketingCard>
		</div>
	);
};
