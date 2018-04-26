import React from 'react';

class SiteBar extends React.Component {
    render () {
        return (
            <div id="sidebar-wrapper">
				<div className="sidebar-content">
					<form role="form">
						<div className="form-group">
							<label htmlFor="min-price">Min Price:</label>
							<select className="form-control" id="min-price">
								<option>£0</option>
								<option>£500</option>
								<option>£1000</option>
								<option>£1500</option>
							</select>
						</div>
						<div className="form-group">
							<label htmlFor="max-price">Max Price:</label>
							<select className="form-control" id="max-price">
								<option>£0</option>
								<option>£500</option>
								<option>£1000</option>
								<option>£1500</option>
							</select>
						</div>
						<div className="form-group">
							<label htmlFor="make">Make:</label>
							<select className="form-control" id="make">
								<option>Audi</option>
								<option>Bentley</option>
								<option>BMW</option>
							</select>
						</div>
							<div className="form-group">
								<label htmlFor="model">Model:</label>
								<select className="form-control" id="model">
									<option>A1</option>
									<option>A2</option>
									<option>A3</option>
								</select>
							</div>
							<div className="form-group">
								<label htmlFor="body">Body:</label>
								<select className="form-control" id="body">
									<option>Saloon</option>
									<option>Estate</option>
									<option>Hatchback</option>
								</select>
							</div>
							<div className="form-group">
								<label htmlFor="gearbox">Gearbox:</label>
								<select className="form-control" id="gearbox">
									<option>Manual</option>
									<option>Automatic</option>
								</select>
							</div>
							<div className="form-group">
								<label htmlFor="fuel">Fuel:</label>
								<select className="form-control" id="fuel">
									<option>Diesel</option>
									<option>Petrol</option>
									<option>Electric</option>
									<option>Hybrid</option>
								</select>
							</div>
							<div className="form-group">
								<label htmlFor="year-from">Year from:</label>
								<select className="form-control" id="year-from">
									<option>2018</option>
									<option>2017</option>
									<option>2016</option>
									<option>2015</option>
								</select>
							</div>
							<div className="form-group">
								<label htmlFor="year-from">Year to:</label>
								<select className="form-control" id="year-to">
									<option>2018</option>
									<option>2017</option>
									<option>2016</option>
									<option>2015</option>
								</select>
							</div>
							<div className="form-group">
								<label htmlFor="milage">Milage:</label>
								<select className="form-control" id="milage">
									<option>Up to 5,000 miles</option>
									<option>Up to 25,000 miles</option>
									<option>Up to 50,000 miles</option>
									<option>Up to 75,000 miles</option>
									<option>Up to 100,000 miles</option>
									<option>Up to 125,000 miles</option>
									<option>Up to 150,000 miles</option>
									<option>Over 150,000 miles</option>
								</select>
							</div>
							<button type="submit" className="btn  btn-primary">Submit</button>
						</form>
					</div>
        </div>
        );
    }
}

export default SiteBar;
