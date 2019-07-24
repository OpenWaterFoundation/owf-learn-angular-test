# owf-learn-angular-test
**Open Water Foundation automated tests to support owf-learn-angular repository**

This repository contains the [Open Water Foundation (OWF)](http://openwaterfoundation.org/) Angular learning materials, which provides guidance for testing an Angular web application using Angular's documentation as well as additional online resources. The documentation is written for the layperson in order to help Angular development be more accessible to others

**//TODO add link to MkDocs once deployed**

### Table of Contents

- [Repository Contents](https://github.com/OpenWaterFoundation/owf-learn-angular#repository-contents)
- [Development Environment](https://github.com/OpenWaterFoundation/owf-learn-angular#development-environment)
- [Editing and Viewing Content](https://github.com/OpenWaterFoundation/owf-learn-angular#editing-and-viewing-content)
- [License](https://github.com/OpenWaterFoundation/owf-learn-angular#license)
- [Maintainers](https://github.com/OpenWaterFoundation/owf-learn-angular#maintainers)
- [Release Notes](https://github.com/OpenWaterFoundation/owf-learn-angular#release-notes)

## Repository Contents

The repository contains the following:

```
├── owf-learn-angular-test
|   ├── simple-e2e-testing-app/ .......................... The first unit testing example in testing in OWF documentation. 
|   ├── simple-unit-testing-app/ ...................... The first end to end testing example in testing OWF documentation.
|   ├── tour-of-heroes/ .......................... Completed Tour of Heros Application from Angular tutorial.
|   ├── tour-of-heroes-unit-testing/ ...................... Unit testing example using Tour of Heroes App.
|   ├── tour-of-heroes-e2e-testing/ .......................... End to End testing example using Tour of Heroes App.
|   ├── .gitattributes ....................... Typical Git configuration file.
|   ├── .gitignore ........................... Typical Git configuration file.
|   ├── README.md ............................ This file.
```

## Development Environment

The development environment for contributing to this project requires installation of Python, MkDocs, and Material MkDocs theme. Python 3 has been used for development. See the [`mkdocs-project/docs/install.md`](https://github.com/OpenWaterFoundation/owf-learn-mkdocs/blob/master/mkdocs-project/docs/install.md) file for information about installing these tools.

## Editing and Viewing Content

If the development environment is properly configured, edit and view content as follows:

1. Edit content in the `mkdocs-project/docs` folder and update `mkdocs-project/mkdocs.yml` as appropriate.
2. Run the `build-util/run-mkdocs-serve-8000.sh` script (Cygwin/Linux) or equivalent.
3. View content in a web browser using URL `http://localhost:8000`.

## License

The OWF Learn MkDocs website content and examples are licensed under the [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-nc-sa/4.0).

## Contributing

Contribute to the documentation as follows:

1. Use GitHub repository issues to report minor issues.
2. Use GitHub pull requests.

## Maintainers

This repository is maintained by the [Open Water Foundation](http://openwaterfoundation.org/).

## Release Notes

The following release notes indicate the update history for documentation, with GitHub repository issue indicated, if applicable (links to issues via README.md are not cleanly supported by GitHub so use the repository issues page to find).

- 2019-07-17 - Documentation created.