import React from "react";

class TableDataRow extends React.Component {
	permission = () =>{
		if (this.props.permission === 1){return "Admin"}
		else {return "Normal"}
	}
	render() {
		return (

				<tr>
					<td scope="row" key={this.props.id}>{this.props.stt+1}</td>
					<td>{this.props.name}</td>
					<td>{this.props.phonenumber}</td>
					<td>{this.permission()}</td>
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

		);
	}
}
export default TableDataRow