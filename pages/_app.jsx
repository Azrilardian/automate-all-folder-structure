/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/require-default-props */
import 'tailwindcss/tailwind.css';
import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Home</title>
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;

MyApp.propTypes = {
	Component: PropTypes.func,
};
