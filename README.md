# react-navigation-magic-move <!-- omit in toc -->

Bindings for using [react-navigation](https://reactnavigation.org/) with [react-native-magic-move](https://github.com/IjzerenHein/react-native-magic-move) 🐰🎩✨

## WIP, use react-native-magic-move@0.4.0-rc2 if you want to test

## Why is this needed

`react-native-magic-move` triggers its animations whenever it detects that a new MagicMove view has been mounted. However, navigation libraries such as `react-navigation` keep components mounted for better performance and faster switching. This means that actions such as back navigation, tab switching or modal popups don't trigger an animation or don't trigger it consistently. This binding solves that problem by installing a hook that forwards the navigator scene information to `react-native-magic-move`.

## Usage

Installation

```
$ yarn add react-navigation-magic-move
```

Import the library

```jsx
import "react-navigation-magic-move";
```

**That's it!**
