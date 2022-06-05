import React from 'react';
import { connect } from 'react-redux';
import { Badge } from 'reactstrap';
class ProductList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h3>
					<Badge color='warning'>Products</Badge>
					<Badge color='success'>{this.props.currentCategory.categoryName}</Badge>
				</h3>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		currentCategory: state.changeCategoryReducer,
	}
}

export default connect(mapStateToProps)(ProductList)