import React from "react";

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tempInput: ""

		}
	}

	isChange = (event) => {
		this.setState({
			tempInput: event.target.value
		})
		this.props.gettext(this.state.tempInput)

	}
	showButton = () => {
		if (this.props.state === true) {
			return <div className="btn  btn-outline-secondary" onClick={() => this.props.hideButton()}>Đóng lại</div>
		} else {
			return <div className="btn  btn-outline-info" onClick={() => this.props.hideButton()}>Thêm Mới</div>
		}
	}

	render() {
		console.log(this.state.tempInput)
		return (

			<div className="col-12">
				<div className="form-group">
					<div className="btn-group" style={{width: '623px'}}>
						<input type="text" className="form-control" value={this.state.tempInput} placeholder="Nhập từ khoá" aria-describedby="helpId"
						       onChange={ (event) => this.isChange(event)}/>
						<div className="btn btn-info" onClick={(text) => this.props.gettext(this.state.tempInput)}>Tìm</div>
					</div>
				</div>
				<div className="form-newgroup mb-3">
					{this.showButton()}
				</div>
			</div>


		);
	}
}

export default Search