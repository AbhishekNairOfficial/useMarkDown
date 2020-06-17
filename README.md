# useMarkDown

**useMarkDown** is a simple React Hook that lets you show your MD file contents as a React component.
This is built using **React Markdown**, and I have just made a separate one for convenience.

## Installation

Installation is straight-forward. Use either npm or yarn.

```zsh
npm i @abhisheknairofficial/use-markdown
```

or

```zsh
yarn add @abhisheknairofficial/use-markdown
```

## Usage

1. Import into your file as follows:

```js
import useMarkDown from '@abhisheknairofficial/use-markdown'
```

2. Import your MD file similarly

```js
import MARKDOWN_FILE from '../foo/bar/index.md'
```

3. Use it in your component in either of the following ways:

```js
const MyReactComponent = (props) => {
	const myMarkdownData = useMarkDown(MARKDOWN_FILE)

	return <>{myMarkdownData}</>
}
```

or

```js
const MyReactComponent = (props) => {
	return <>{useMarkDown(MARKDOWN_FILE)}</>
}
```
