import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import './index.css';
import Button from './components/Button';

const Container = styled.div`
	display: flex;
	justify-content: flex-start;
	width: 100vw;
	height: 100vh;
`;

const ComponentHeader = styled.h1``;

const App = () => {
	return (
		<Container>
			<section>
				<ComponentHeader>Button example</ComponentHeader>
				<Button size={2} text="Hey" />
				<Button size={5} text="Don't" />
				<Button size={10} text="Do that" />
			</section>
		</Container>
	);
};

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
