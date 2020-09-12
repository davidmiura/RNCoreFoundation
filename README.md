# React Native App Core Foundation Template

>**Bootstrap your React Navive App on the right foot with a set of widely accepted best practices in this opinionated template for React Native CLI.**

## Getting Started

### Prerequisites



| Requirement | Dependencies | Platform | Notes |
| --- | --- | --- | --- |
| [React Native Environment Setup](https://reactnative.dev/docs/environment-setup) | [Node.js](https://nodejs.org/) Node Runtime<br>[Watchman](https://facebook.github.io/watchman/) Dev hot reload file watcher<br>[npx](https://github.com/npm/npx#readme) bootstrap npm wrapper | All | Follow React Native environment setup guide to install dependencies. |
| [Xcode](https://developer.apple.com/xcode/) | [Xcode CLI Tools](https://developer.apple.com/library/archive/technotes/tn2339/_index.html) | OSX | Must use a Mac to build for iOS. Includes iOS simulator to run your apps. |
| [android studio](https://developer.android.com/studio) | | All | Includes Android simulator to run your apps. |

### Setup a New App Project

>Note: Same steps as react-native cli. Shown here for convenience.

>Recommendation: Use `npx` instead of `npm` to execute react-native cli.

``` zsh
git clone https://github.com/davidmiura/RNCoreFoundation.git

npx react-native init my_cool_app --npm --template file:///<full_path_to_RNCoreFoundation_clone>
```

React-native builds my_cool_app using npm and the template. It will run `npm install` for the provided package.json to install npm packages.

See: [Example Log](LOG.md)

### Run App for iOS

>Note: Same steps as react-native cli. Shown here for convenience.

``` zsh
cd my_cool_app
npx react-native run-ios
```

You should see overall build progress in the console. React-native will perform `pod install` for the ios\podfile. The build process will launch a React Native Metro Server which serves your JS app to the device. The build will also install and launch your app in the iOS simulator.

See: [Example Log](LOG.md)

### Alternate build using specific simulated device

List iOS simulator devices

``` zsh
xcrun simctl list devices
```

Build and deploy to specific device

``` zsh
npx react-native run-ios --simulator="iPhone 11 Pro Max"
```

### Alternate manual NPM steps

``` zsh
npm install

cd ios
pod install
cd ..

npm run ios
```

### Run App for Android

>Note: Same steps as react-native cli. Shown here for convenience.

Requires Android Studio

``` zsh
cd my_cool_app
npx react-native run-android
```

## Best Practices

### Code Quality

| Best Practice | Method | Configuration | Command | Notes |
| --- | --- | --- | --- | --- |
| Type Safety | [TypeScript](https://www.typescriptlang.org/) | `tsconfig.json` | | |
| Linting | [ESLint](https://eslint.org/) | `.eslintrc.js` | npm run lint<br>npm run lint-fix| |
| Unit Testing | [Jest](https://jestjs.io/) | `package.json` | npm run test | |
| Code Formatting | [Prettier](https://prettier.io/) | `.prittierrc.js` | npm run lint-fix | |
| Code Promotion Quality | [Husky](https://github.com/typicode/husky/) | `package.json` | git commit<br>git push | Git Hooks |

### UX

| Best Practice | Method | Notes |
| --- | --- | --- |
| UX Component Lib | [React Native Paper](https://callstack.github.io/react-native-paper/) | [Material Design](https://material.io/design/) UX Style |
| Navigation | [React Navigation v5](https://reactnavigation.org) | |

### Security

| Best Practice | Method | Notes |
| --- | --- | --- |
| Authentication | TBD | 3rd Party Provider |
| Authorization | TBD/RBAC | Make a lib/service suggestion! |
| API Access Control | [JWT Bearer Token](https://tools.ietf.org/html/rfc7523) | [RFC 7523](https://tools.ietf.org/html/rfc7523) |

### Data Flow

| Best Practice | Method | Notes |
| --- | --- | --- |
| App State Management | [Redux Toolkit](https://redux-toolkit.js.org/) | Wrapper for [Redux](https://redux.js.org/style-guide/style-guide) |
| API | [Graphql](https://graphql.org/) | |
| API | REST | |

## Code Layout

``` zsh
.
├── android
│   ├── app
│   └── gradle
├── ios
│   ├── Pods
│   ├── <APP_NAME>
│   ├── <APP_NAME>-tvOS
│   ├── <APP_NAME>-tvOSTests
│   ├── <APP_NAME>.xcodeproj
│   ├── <APP_NAME>.xcworkspace
│   └── <APP_NAME>Tests
└── src
    ├── __tests__
    ├── assets
    ├── components
    ├── config
    ├── features
    ├── library
    ├── navigators
    ├── screens
    ├── scripts
    ├── store
    ├── styles
    └── utils
```

### Layout Map

>Note: Each \src\\_element_ has it's own package.json to simplify imports without using relataive paths.

| Element | Path | Notes |
| --- | --- | --- |
| Tools Config | [_root_](template/src) | Build system, code quality, docs. |
| Android Target | [\android](template/android) | Requires Android Studio |
| iOS Target | [\ios](template/ios) | Open <APP_NAME>.xcworkspace file in xCode |
| Unit Tests | [\src\\_\_tests\_\_](template/src/__tests__) | Integration Jest tests. Component unit tests are co-located within component. |
| Static Assets | [\src\assets](template/src/assets) | Binary assets, ie images |
| React Components | [\src\components](template/src/components) | React components local to app. ie Hooks, Components, Contexts, etc. |
| App Config | [\src\config](template/src/config) | App local configs |
| Features | [\src\features](template/src/features) | _Deprecated_ |
| Library | [\src\library](template/src/library) | _Deprecated_ |
| Navigation UX | [\src\navigators](template/src/navigators) | React Navigation _navigators_ |
| Screen UX | [\src\screens](template/src/screens) | React Navigation _screens_ |
| NPM Scripts | [\src\scripts](template/src/scripts) | NPM package.json scripts |
| Redux Store | [\src\store](template/src/store) | Redux store and store slices |
| Style UX | [\src\style](template/src/style) | Themes, palettes, typography, element ux specs, accessablity, etc. |
| Utils | [\src\utils](template/src/utils) | Minimize or _deprecate_ |

## Developer Experience

Metro JS Server and Hot Reloading

[Metro Dev Server Config](https://facebook.github.io/metro/docs/configuration)
