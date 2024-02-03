import sapphirePrettierConfig from '@sapphire/prettier-config';

export default {
	...sapphirePrettierConfig,
	useTabs: false,
	tabWidth: 2,
	overrides: [
		...sapphirePrettierConfig.overrides,
		{
			files: ['*.md'],
			options: {
				printWidth: 120,
				proseWrap: 'always'
			}
		}
	]
};
