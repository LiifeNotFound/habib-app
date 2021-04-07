import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/header/header';
import Highlight from './components/highlight/highlight';
import SectTitle from './components/sect-title/sect-title';
import Footer from './components/footer/footer';

ReactDOM.render(
	<>
		<Header />
		<Highlight />
		<SectTitle title='Sobre' />
		<SectTitle title='Prataformas' />
		<SectTitle title='Finalidade' />
		<SectTitle title='Contactos' />
		<Footer />
	</>,
	document.getElementById('root')
);
