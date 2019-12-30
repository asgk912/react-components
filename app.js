var GroceryList = (props) => (
	<ul>		
		{props.groceryItems.map(item => <GrocerListItem item={item}/>)}		
	</ul>
);


//<GroceryListItem item = {props.groceryItems[0]} />
// <GroceryListItem item = {props.groceryItems[1]} />

/* Creating and rendering nested React components
var Rice = () => (
	<li>Rice</li>
)

var Pasta = () => (
	<li>Psta</li>
)
*/

/* Component Properties aka "props"
var GroceryListItem = (props) => (
	<li>{props.item}</li>
)
*/

class GrocerListItem extends React.Component {
	constructor(props){
		super(props);

		this.state = {
      		hovered: false
		};
	}

	boldOnMouseOver() {
    	this.setState({
      		hovered: true
    	});
	}

	unboldOnMouseOut() {
    	this.setState({
      		hovered: false
    	});
	}

	render() {
		var style = {
      		fontWeight: this.state.hovered ? 'bold' : 'normal'
    	};

		return (
			<li style={style} onMouseOver={this.boldOnMouseOver.bind(this)} onMouseOut={this.unboldOnMouseOut.bind(this)}>{this.props.item}</li>
		);
	}
}

var groceryItems = ['Rice', 'Pasta'];

ReactDOM.render(<GroceryList groceryItems = {groceryItems}/>, document.getElementById("app"));