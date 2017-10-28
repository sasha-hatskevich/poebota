'use strict'

let ImgStatlessComponent = function (props) {
	return (
		<div>
			<span className='counter' data-counter="counter">{props.amount}</span>
			<img src={props.imgUrl} alt="Bitcoin" onClick={props.onClickHandler}/>
		</div>
	)
}

let StateComponent = React.createClass({
	getInitialState() {
		return {
			amount: 0
		}
	},
	handler() {
		this.setState({amount: this.state.amount + 1});
	},
	render() {
		return (
			<div className="container">
				<ImgStatlessComponent imgUrl={this.props.imgUrl} onClickHandler={this.handler} amount={this.state.amount}/>
				<h1>{this.props.text}</h1>
				<p>{this.props.subtext}</p>
			</div>
		)
	}
});

let App = React.createClass({
	render() {
		return (
			<div>
				{this.props.heroes.map((hero) => <StateComponent key={hero.id} imgUrl={hero.imgUrl} text={hero.tite} subtext={hero.subtitle}/>)}
			</div>
		)
	}
});

let data = [
	{
		id: 1,
		title: 'Ethereum',
		subtitle: 'ssssssssd dd d d',
		imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/ETHEREUM-YOUTUBE-PROFILE-PIC.png'
	},
	{
		id: 2,
		title: 'Bitcoin',
		subtitle: '213123',
		imgUrl: 'http://realbaks.com/foto/bitcoin.png'
	}
];

ReactDOM.render(<App heroes={data}/> ,document.getElementById('renderPlace'));