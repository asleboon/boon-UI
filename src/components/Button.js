import React from 'react';
import styled from 'styled-components';
import { useSpring, animated, interpolate } from 'react-spring';

const MyButton = styled(animated.button)`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 60px;
	height: 25px;
	padding: 5px;
	border-radius: 4px;
	border: none;
	color: white;
	font-size: 16px; /* ${p => p.size}; */
	font-weight: bold;
	background-color: ${p => p.clicked};
	-webkit-box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
	-moz-box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
	box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
`;

const Button = ({ text, size, color, bgColor }) => {
	const [isMounted, setMounted] = React.useState(false);
	const [btnClicked, setBtnClicked] = React.useState(false);
	const { x, y, z, s } = useSpring({
		from: { x: 0, y: 0, z: 0, s: !isMounted ? 1 : 1.1 },
		to: {
			x: 80,
			y: 40,
			z: 16,
			s: btnClicked
				? size / 10 + 0.5
				: size && size > 0 && size <= 10
				? 1 + size / 10
				: 1.3
		}
	});
	const handleButtonClick = () => {
		setBtnClicked(true);
	};
	const handleButtonUp = () => {
		setBtnClicked(false);
	};

	React.useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<React.Fragment>
			<MyButton
				style={{
					transform: s.interpolate(s => `scale(${s})`),
					backgroundColor: bgColor ? bgColor : '#43d5f4',
					color: color ? color : '#FFF'
				}}
				onMouseLeave={handleButtonUp}
				onMouseUp={handleButtonUp}
				onMouseDown={handleButtonClick}
			>
				{text}
			</MyButton>
		</React.Fragment>
	);
};

export default Button;
