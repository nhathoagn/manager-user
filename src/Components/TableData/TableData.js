import React from "react";
import TableDataRow from "../TabbleDataRow/TableDataRow";

class TableData extends React.Component {
    mappingData = () => (this.props.data.map( (value,key) =>(
	    <TableDataRow stt={key} name={value.name} phonenumber={value.phonenumber} permission={value.permission} />
    )))
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
						{this.mappingData()}
						</tbody>
					</table>
				</div>



		);
	}
}
export default TableData