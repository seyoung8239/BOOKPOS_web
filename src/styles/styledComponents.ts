import { styled } from '@mui/material/styles';

interface ContainerProps {
	bgColor?: string;
}

export const StyledContainer = styled('div')<ContainerProps>`
	height: 880px;
	padding: 5vw 20vw 5vw 20vw;
	background: ${props => (props.bgColor ? props.bgColor : 'white')};

	@media (max-width: 1500px) {
	}
`;

export const HalfContainer = styled('div')`
	width: 50%;
	height: 100%;
`;
