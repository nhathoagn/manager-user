import React from "react";

class AddUser extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isShow : false
		}
	}
	showButton = () =>{
		if (this.state.isShow === true){
			return 	<div className="btn btn-block btn-outline-secondary" onClick={ () => this.hideButton()}>Đóng lại</div>
		}else {
			return <div className="btn btn-block btn-outline-info" onClick={ () => this.hideButton()}>Thêm Mới</div>
		}
	}
	hideButton = () =>{
		this.setState({
			isShow: !this.state.isShow
		});
	}
        showForm= () => {
	        if (this.state.isShow === true){
		        return(




				        <div className="card mt-3">


					        <div className="card-header ">Thêm Mới </div>
					        <div className="card-body text-primary ">

						        <div className="form-group">
							        <input type="text" className="form-control"  aria-describedby="helpId" placeholder="Tên User" />
						        </div>
						        <div className="form-group">
							        <input type="text" className="form-control"  aria-describedby="helpId" placeholder="Số Điện Thoại" />
						        </div>
						        <div className="form-group">
							        <select className="custom-select" required>
								        <option >Chọn Quyền</option>
								        <option value={1}>Admin</option>
								        <option value={2}>Normal</option>
							        </select>
						        </div>
						        <div className="form-group">
							        <div className="btn btn-block btn-primary">Thêm Mới</div>
						        </div>
					        </div>
				        </div>

		        )
	        }
        }
	render() {

		return (
			<div className="col-3 right">
				{this.showButton()}
				{this.showForm()}
			</div>



		);
	}
}
export default AddUser