import React, { Component } from 'react';

import NavBar from './navbar';
import Hero from './hero';

class App extends Component {
	render() {
		return <div>
			<header>
				<NavBar>
					<Hero />
				</NavBar>
			</header>

		</div>
	}
}

export default App;
