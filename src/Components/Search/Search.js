import React from "react";

class Search extends React.Component {
	showButton = () =>{
		if (this.props.state === true){
			return 	<div className="btn  btn-outline-secondary" onClick={ () => this.props.hideButton()}>Đóng lại</div>
		}else {
			return <div className="btn  btn-outline-info" onClick={ () => this.props.hideButton()}>Thêm Mới</div>
		}
	}
	render() {
		return (

				<div className="col-12">
					<div className="form-group">
						<div className="btn-group" style={{width: '623px'}}>
							<input type="text"  className="form-control" placeholder="Nhập từ khoá" aria-describedby="helpId" />
							<div className="btn btn-info">Tìm</div>
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