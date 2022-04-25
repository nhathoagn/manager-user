import React from "react";

class AddUser extends React.Component {
	render() {
		return (
			<div>
				<div className="col-3">
					.
					<div className="card border-primary">
						<div className="card-header">Thêm mới </div>
						<div className="card-body text-primary">
							<h5 className="card-title">
							</h5>
							<div className="form-group">
								<input type="text" className="form-control" name aria-describedby="helpId" placeholder="Tên User" />
							</div>
							<div className="form-group">
								<input type="text" className="form-control" name aria-describedby="helpId" placeholder="Số Điện Thoại" />
							</div>
							<div className="form-group">
								<select className="custom-select" required>
									<option selected>Chọn Quyền</option>
									<option value={1}>Admin</option>
									<option value={2}>Normal</option>
								</select>
							</div>
							<div className="form-group">
								<div className="btn btn-block btn-primary">Thêm Mới</div>
							</div>
						</div>
					</div>
				</div>


			</div>
		);
	}
}