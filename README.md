# PlayChi JS HLS - [HLS.JS] Adapter for the [PlayChi JS Player]

[![Build Status](https://github.com/tasvirchi/playchi-js-hls/actions/workflows/run_canary_full_flow.yaml/badge.svg)](https://github.com/tasvirchi/playchi-js-hls/actions/workflows/run_canary_full_flow.yaml)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![](https://img.shields.io/npm/v/@playchi-js/playchi-js-hls/latest.svg)](https://www.npmjs.com/package/@playchi-js/playchi-js-hls)
[![](https://img.shields.io/npm/v/@playchi-js/playchi-js-hls/canary.svg)](https://www.npmjs.com/package/@playchi-js/playchi-js-hls/v/canary)

PlayChi JS HLS adapter integrates [HLS.JS] with the [PlayChi JS Player].

PlayChi JS HLS is written in [ECMAScript6], statically analysed using [Flow] and transpiled in ECMAScript5 using [Babel].

[hls.js]: https://github.com/video-dev/hls.js
[hls.js api docs]: https://github.com/video-dev/hls.js/blob/master/docs/API.md
[flow]: https://flow.org/
[ecmascript6]: https://github.com/ericdouglas/ES6-Learning#articles--tutorials
[babel]: https://babeljs.io

## Getting Started

### Prerequisites

The adapter requires [PlayChi JS Player] to be loaded first.

The adapter uses the [HLS.JS] javascript library.

[playchi js player]: https://github.com/tasvirchi/playchi-js

### Installing

First, clone and run [yarn] to install dependencies:

[yarn]: https://yarnpkg.com/lang/en/

```
git clone https://github.com/tasvirchi/playchi-js-hls.git
cd playchi-js-hls
yarn install
```

### Building

Then, build the player

```javascript
yarn run build
```

### Embed the library in your test page

Finally, add the bundle as a script tag in your page, and initialize the player

```html
<script type="text/javascript" src="/PATH/TO/FILE/playchi.js"></script>
<script type="text/javascript" src="/PATH/TO/FILE/playchi-hls.js"></script>
<div id="player-placeholder"" style="height:360px; width:640px">
<script type="text/javascript">
  var playerContainer = document.querySelector("#player-placeholder");
  var config = {...};
  var player = playchi.core.loadPlayer(config);
  playerContainer.appendChild(player.getView());
  player.play();
</script>
```

## Configuration

[HLS.JS] configuration options, documented @[HLS.JS API docs], can be passed via the [PlayChi JS Player] config.

The configuration is exposed via the playback section:

```javascript
{
  playback: {
    options: {
      html5: {
        hls: {
          // HLS.JS configuration options here
        }
      }
    }
  }
}
```

## Running the tests

Tests can be run locally via [Karma], which will run on Chrome, Firefox and Safari

[karma]: https://karma-runner.github.io/1.0/index.html

```
yarn run test
```

You can test individual browsers:

```
yarn run test:chrome
yarn run test:firefox
yarn run test:safari
```

### And coding style tests

We use ESLint [recommended set](http://eslint.org/docs/rules/) with some additions for enforcing [Flow] types and other rules.

See [ESLint config](.eslintrc.json) for full configuration.

We also use [.editorconfig](.editorconfig) to maintain consistent coding styles and settings, please make sure you comply with the styling.

## Compatibility

TBD

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/tasvirchi/playchi-js-hls/tags).

## License

This project is licensed under the AGPL-3.0 License - see the [LICENSE.md](LICENSE.md) file for details
