# Contributing

We love your input! We want to make contributing to this project as easy and transparent as possible.

## Code of Conduct

This project has adopted a Code of Conduct that we expect project
participants to adhere to. Please [read the full text](./CODE_OF_CONDUCT.md)
so that you can understand what actions will and will not be tolerated.

## Pull Requests

To contribute to this repository, feel free to fork the repository and make your own changes. Once you have made your changes, you can submit a pull request.

1. Fork the repository and select the main branch.
2. Create a new branch and make your changes.
3. Make sure you use a proper linter and a code formatter.
4. Make sure you have a good commit message.
5. Push your changes.
6. Submit a pull request here.

## Issues

[Open an issue](https://github.com/asyncapi/asyncapi/issues/new) **only** if you want to report a bug or a feature. Don't open issues for questions or support, instead join our [Discord Server](https://paulandrew/vercel.app/discord) and ask there.

## Conventional commits

Our repositories follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary) specification. Releasing to GitHub and NPM is done with the support of [semantic-release](https://semantic-release.gitbook.io/semantic-release/).

Pull requests should have a title that follows the specification, otherwise, merging is blocked. If you are not familiar with the specification simply ask maintainers to modify. You can also use this cheatsheet if you want:

-   `fix: ` prefix in the title indicates that PR is a bug fix and PATCH release must be triggered.
-   `feat: ` prefix in the title indicates that PR is a feature and MINOR release must be triggered.
-   `docs: ` prefix in the title indicates that PR is only related to the documentation and there is no need to trigger release.
-   `chore: ` prefix in the title indicates that PR is only related to cleanup in the project and there is no need to trigger release.
-   `test: ` prefix in the title indicates that PR is only related to tests and there is no need to trigger release.
-   `refactor: ` prefix in the title indicates that PR is only related to refactoring and there is no need to trigger release.

What about MAJOR release? just add `!` to the prefix, like `fix!: ` or `refactor!: `

Prefix that follows specification is not enough though. Remember that the title must be clear and descriptive with usage of [imperative mood](https://chris.beams.io/posts/git-commit/#imperative).

Happy contributing :heart:

## References

This document was adapted from the open-source contribution guidelines for [Facebook's Draft](https://github.com/facebook/draft-js/blob/master/CONTRIBUTING.md).
