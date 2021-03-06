/** @jsxImportSource @emotion/react */
import React from 'react';
import { StyledContainer } from '../../styles/styledComponents';
import { css } from '@emotion/react';
import { StringLiteral } from 'typescript';

import { primaryColor, secondaryColor, tripleColor } from '../../styles/colors';
import { Button } from '@mui/material';

const priceData: productBoxType[] = [
	{
		title: 'BASIC',
		tcolor: tripleColor,
		desc: '소속 작가 50인 이하 소규모 및 스타트업 출판사(에이전시)',
		price: '150,000',
		options: {
			capacity: '용량 : 총 100GB*용량 추가 불가',
			initialPrice: '250,000',
		},
	},
	{
		title: 'SPECIAL',
		tcolor: secondaryColor,
		desc: '소속 작가 300인 이하 중규모 출판사(에이전시)',
		price: '300,000',
		options: {
			capacity: '용량 : 총 300GB*용량 추가 기능',
			initialPrice: '500,000',
		},
	},
	{
		title: 'PREMIUM',
		tcolor: primaryColor,
		desc: '소속 작가 300인 이하 중대형 출판사(에이전시)',
		price: '450,000',
		options: {
			capacity: '용량 : 총 500GB*용량 추가 기능',
			initialPrice: '1,000,000',
		},
	},
];

interface productBoxType {
	title: string;
	tcolor: string;
	desc: string;
	price: string;
	options: options;
}

interface options {
	capacity: string;
	initialPrice: string;
}

const ProductBox: React.FC<{ data: productBoxType }> = ({ data }) => {
	const { title, tcolor, desc, price, options } = data;
	return (
		<>
			<div
				css={css`
					background-color: white;
					width: 200px;
					border-radius: 20px;
					padding: 20px;
				`}
			>
				<div
					css={css`
						color: ${tcolor};
						font-weight: 700;
						font-size: 27px;
						margin-bottom: 30px;
					`}
				>
					{title}
				</div>
				<div
					css={css`
						font-size: 16px;
					`}
				>
					{desc}
				</div>
				<div
					css={css`
						color: #888;
						font-size: 14px;
					`}
				>
					약정 1년 단위
				</div>
				<div style={{ height: '10px' }} />
				<div>
					월
					<span
						css={css`
							font-size: 27px;
							font-weight: 700;
						`}
					>
						{price}원
					</span>
				</div>
				<div style={{ height: '10px' }} />
				<div
					css={css`
						background-color: #eee;
						padding: 10px;
						font-weight: 400;
						border-radius: 10px;
						font-size: 14px;
					`}
				>
					<div>{options.capacity}</div>
					<div style={{ height: '5px' }} />
					<div>설치비: {options.initialPrice}원/최초 1회</div>
					<div style={{ height: '5px' }} />
					<div>계정 제한: 무제한</div>
				</div>
				<Button>견적문의 및 도입 신청</Button>
			</div>
		</>
	);
};

function Screen1() {
	return (
		<>
			<StyledContainer bgcolor="#EEE" wd='100%'>
				<div
					css={css`
						font-size: 32px;
						font-weight: 800;
						text-align: center;
						margin-bottom: 15px;
					`}
				>
					제품 및 가격안내
				</div>
				<div
					css={css`
						font-size: 17px;
						font-weight: 400;
						text-align: center;
						color: #888;
						margin-bottom: 40px;
					`}
				>
					규모 환경 예산에 맞게 도입할 수있는 다양한 유형의 제품을
					합리적인 가격으로 제공합니다.
				</div>
				<div
					css={css`
						display: flex;
						align-items: center;
						justify-content: center;
						gap: 15px;
					`}
				>
					{priceData.map((pd, i) => (
						<ProductBox data={pd} />
					))}
				</div>
			</StyledContainer>
		</>
	);
}

export default Screen1;
