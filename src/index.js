import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/header/header';
import Highlight from './components/highlight/highlight';
import SectTitle from './components/sect-title/sect-title';
import Footer from './components/footer/footer';
import About from './components/about/about';

ReactDOM.render(
	<>
			<Header />
		<Highlight />
		<section className="about">
			<SectTitle title="Sobre" />
			<About />
		</section>
		<section>
			<SectTitle title="Prataformas" />
		</section>
		<section>
			<SectTitle title="Finalidade" />
		</section>
		<section>
			<SectTitle title="Contactos" />
		</section>
		<section>
			<Footer />
		</section>
	</>,
	document.getElementById('root')
);
