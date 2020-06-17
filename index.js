import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'

// This file takes an imported MD file
// And returns a React component using React-Markdown

const useMarkDown = (fileContent) => {
	const [markDownString, setMarkDownString] = useState('')

	useEffect(() => {
		fetch(fileContent)
			.then((response) => {
				return response.text()
			})
			.then((text) => {
				setMarkDownString(text)
			})
	}, [fileContent])

	if (!fileContent || !markDownString) {
		return <></>
	}

	return <ReactMarkdown source={markDownString} />
}

export default useMarkDown
