# @koshikishi/linthtml-config

[![NPM Version][npm-image]][npm-url]
[![GitHub License][license-image]][license-url]
[![Check Workflow Status][workflow-image]][workflow-url]

The LintHTML shareable config designed for my personal projects.

Use it as is or as a foundation for your own configuration file.

## Installation

Install the package and `linthtml` in your project:

```sh
npm i -D @linthtml/linthtml @koshikishi/linthtml-config
```

## Usage

Set your `linthtml` config to:

```json
{
  "extends": "@koshikishi/linthtml-config"
}
```

### Extending the config

Add a `"rules"` key to your config, then add your overrides and additions there.

For example, to change the `id-style` rule and specify a different format, turn off the `tag-bans` rule and add the `class-style` rule:

```json
{
  "extends": "@koshikishi/linthtml-config",
  "rules": {
    "class-style": [true, "bem"],
    "id-style": [true, "underscore"],
    "tag-bans": false
  }
}
```

## Integration with VS Code

1. Install the LintHTML [extension](https://marketplace.visualstudio.com/items?itemName=kamikillerto.vscode-linthtml) for VS Code.
2. Install `linthtml` and this config in your project following the [Installation](#installation) section.
3. Add a LintHTML configuration file (`.linthtmlrc.*`) and extend it with this shareable config following the [Usage](#usage) section.

## Useful links

- [Changelog](CHANGELOG.md)
- [LintHTML documentation](https://linthtml.vercel.app/)

[npm-image]: https://img.shields.io/npm/v/@koshikishi/linthtml-config
[npm-url]: https://www.npmjs.com/package/@koshikishi/linthtml-config
[license-image]: https://img.shields.io/github/license/koshikishi/linthtml-config
[license-url]: https://github.com/koshikishi/linthtml-config/blob/main/LICENSE
[workflow-image]: https://github.com/koshikishi/linthtml-config/actions/workflows/check.yml/badge.svg
[workflow-url]: https://github.com/koshikishi/linthtml-config/actions
