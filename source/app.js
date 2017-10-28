'use strict';

let ImgStatlessComponent = function (props) {
	return React.createElement(
		'div',
		null,
		React.createElement(
			'span',
			{ className: 'counter', 'data-counter': 'counter' },
			props.amount
		),
		React.createElement('img', { src: props.imgUrl, alt: 'Bitcoin', onClick: props.onClickHandler })
	);
};

let StateComponent = React.createClass({
	getInitialState() {
		return {
			amount: 0
		};
	},
	handler() {
		this.setState({ amount: this.state.amount + 1 });
	},
	render() {
		return React.createElement(
			'div',
			{ className: 'container' },
			React.createElement(ImgStatlessComponent, { imgUrl: this.props.imgUrl, onClickHandler: this.handler, amount: this.state.amount }),
			React.createElement(
				'h1',
				null,
				this.props.text
			),
			React.createElement(
				'p',
				null,
				this.props.subtext
			)
		);
	}
});

let App = React.createClass({
	render() {
		return React.createElement(
			'div',
			null,
			this.props.heroes.map(hero => React.createElement(StateComponent, { key: hero.id, imgUrl: hero.imgUrl, text: hero.tite, subtext: hero.subtitle }))
		);
	}
});

let data = [{
	id: 1,
	title: 'Ethereum',
	subtitle: 'ssssssssd dd d d',
	imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/ETHEREUM-YOUTUBE-PROFILE-PIC.png'
}, {
	id: 2,
	title: 'Bitcoin',
	subtitle: '213123',
	imgUrl: 'http://realbaks.com/foto/bitcoin.png'
}];

ReactDOM.render(React.createElement(App, { heroes: data }), document.getElementById('renderPlace'));
