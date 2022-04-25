import React from "react";

class Search extends React.Component {
	render() {
		return (
			<div>
				<div className="col-12">
					<div className="form-group">
						<div className="btn-group" style={{width: '623px'}}>
							<input type="text" name className="form-control" placeholder="Nhập từ khoá" aria-describedby="helpId" />
							<div className="btn btn-info">Tìm</div>
						</div>
					</div>
				</div>

					<hr/>
			</div>
		);
	}
}
export default Search