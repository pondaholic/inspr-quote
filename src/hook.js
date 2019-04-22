import React, { useState } from 'react';

export default function Counter() {
	const [count, setCount] = useState(0);

	function handleClickAlert() {
		setTimeout(() => {
			console.log('You clicked on: ' + count);
		}, 3000);
	}

	return (
		<div>
			<p> Button clicked {count} times.</p>
			<button onCLick={() => setCount(count + 1)}>Click</button>
			<button onClick={handleClickAlert}>Alert</button>
		</div>
	);
}
