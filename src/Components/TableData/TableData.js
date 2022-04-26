import React from "react";

class TableData extends React.Component {

	render() {
		return (

				<div className="col-9">
					<table className="table table-striped  table-hover">
						<thead className="thead-inverse">
						<tr>
							<th>STT</th>
							<th>Tên</th>
							<th>Số Điện Thoại</th>
							<th>Thao tác</th>
						</tr>
						</thead>
						<tbody>
						<tr>
							<td scope="row">1</td>
							<td>Nguyễn Nhật Hoàng</td>
							<td>0889554225</td>
							<td>Admin</td>
							<td>
								<div className="btn-group">
									<div className="btn btn-warning sua">
										<i className="fa fa-edit  ">Sửa</i>
									</div>
									<div className="btn btn-danger xoa">
										<i className="fa fa-delete   ">Xoá</i>
									</div>
								</div>
							</td>
						</tr>
						<tr>
							<td scope="row">2</td>
							<td>Nguyễn Nhật Hoàng</td>
							<td>0889554225</td>
							<td>Admin</td>
							<td>
								<div className="btn-group">
									<div className="btn btn-warning sua">
										<i className="fa fa-edit  ">Sửa</i>
									</div>
									<div className="btn btn-danger xoa">
										<i className="fa fa-delete   ">Xoá</i>
									</div>
								</div>
							</td>
						</tr>
						<tr>
							<td scope="row">3</td>
							<td>Nguyễn Nhật Hoàng</td>
							<td>0889554225</td>
							<td>Admin</td>
							<td>
								<div className="btn-group">
									<div className="btn btn-warning sua">
										<i className="fa fa-edit  ">Sửa</i>
									</div>
									<div className="btn btn-danger xoa">
										<i className="fa fa-delete   ">Xoá</i>
									</div>
								</div>
							</td>
						</tr>
						<tr>
							<td scope="row">4</td>
							<td>Nguyễn Nhật Hoàng</td>
							<td>0889554225</td>
							<td>Admin</td>
							<td>
								<div className="btn-group">
									<div className="btn btn-warning sua">
										<i className="fa fa-edit  ">Sửa</i>
									</div>
									<div className="btn btn-danger xoa">
										<i className="fa fa-delete   ">Xoá</i>
									</div>
								</div>
							</td>
						</tr>
						<tr>
							<td scope="row">5</td>
							<td>Nguyễn Nhật Hoàng</td>
							<td>0889554225</td>
							<td>Admin</td>
							<td>
								<div className="btn-group">
									<div className="btn btn-warning sua">
										<i className="fa fa-edit  ">Sửa</i>
									</div>
									<div className="btn btn-danger xoa">
										<i className="fa fa-delete   ">Xoá</i>
									</div>
								</div>
							</td>
						</tr>
						</tbody>
					</table>
				</div>



		);
	}
}
export default TableData