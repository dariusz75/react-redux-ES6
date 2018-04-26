import React from 'react';

class UserPageContent extends React.Component {
    render () {
        return (
            <div id="page-content-wrapper">
                <div className="container-fluid">
                <a href="#menu-toggle" className="btn btn-primary" id="menu-toggle">Select Car</a>
                <h2>... cars found</h2>

                <div className="row">
									<div className="col-md-4">
										<div className="thumbnail">
											<a href="images/A2-1.jpeg">
												<img src="images/A2-1.jpeg" alt="car" style={{width: 100+'%'}}></img>
											</a>
										</div>
									</div>
									<div className="col-md-4">
										<div className="thumbnail">
											<a href="images/A2-2.jpeg">
												<img src="images/A2-2.jpeg" alt="car" style={{width: 100+'%'}}></img>
											</a>
										</div>
									</div>
									<div className="col-md-4">
										<div className="thumbnail">
											<a href="images/A2-3.jpeg">
												<img src="images/A2-3.jpeg" alt="car" style={{width: 100+'%'}}></img>
											</a>
										</div>
									</div>
								</div>

								<div className="row">
									<div className="col-12">
										<h3><span>Descriptions</span></h3>
										<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis unde ullam rerum tempore nulla, est culpa cumque dolorem vel magni. Praesentium temporibus iusto dolor ipsa atque vero, odit id quis fugit. Facere dolorum laboriosam cumque excepturi numquam delectus. Excepturi qui reiciendis porro voluptatum! Velit repudiandae error, libero reprehenderit blanditiis enim?</p>
										<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis unde ullam rerum tempore nulla, est culpa cumque dolorem vel magni. Praesentium temporibus iusto dolor ipsa atque vero, odit id quis fugit. Facere dolorum laboriosam cumque excepturi numquam delectus. Excepturi qui reiciendis porro voluptatum! Velit repudiandae error, libero reprehenderit blanditiis enim?</p>
									</div>
								</div>

								<div className="row">
									<div className="col-md-3">
										<div className="values-displayed"><span>Price </span>£1800</div>
									</div>
									<div className="col-md-3">
										<div className="values-displayed"><span>Make</span>Audi</div>
									</div>
									<div className="col-md-3">
										<div className="values-displayed"><span>Model</span>A3</div>
									</div>
									<div className="col-md-3">
										<div className="values-displayed"><span>Body</span>Hatchback</div>
									</div>
								</div>

								<div className="row">
									<div className="col-md-3">
										<div className="values-displayed"><span>Gearbox</span>Manual</div>
									</div>
									<div className="col-md-3">
										<div className="values-displayed"><span>Fuel</span>Diesel</div>
									</div>
									<div className="col-md-3">
										<div className="values-displayed"><span>Year</span>2004</div>
									</div>
									<div className="col-md-3">
										<div className="values-displayed"><span>Milage</span>125000</div>
									</div>
								</div>

								<div className="line"></div>
								</div>
            </div>
        );
    }
}

export default UserPageContent;
