import React from 'react';

class Header extends React.Component {
    render () {

        return (
          <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="">Project Name</a>
        </div>
        <div id="navbar" className="collapse navbar-collapse">
          <ul className="nav navbar-nav navbar-right">

            <li className="dropdown">
              <a className="dropdown-toggle" data-toggle="dropdown">Admin<span className="caret"></span></a>
              <ul className="dropdown-menu dropdown-lr animated slideInRight" role="menu">
                <div className="col-lg-12">
                  <div className="text-center">
                    <h3><b>Log In</b></h3></div>
                  <form id="ajax-login-form" action="http://phpoll.com/login/process" method="post" role="form" autocomplete="off">
                    <div className="form-group">
                      <label for="username">Username</label>
                      <input type="text" name="username" id="username" tabindex="1" className="form-control" placeholder="Username" value="" autocomplete="off"></input>
                    </div>

                    <div className="form-group">
                      <label for="password">Password</label>
                      <input type="password" name="password" id="password" tabindex="2" className="form-control" placeholder="Password" autocomplete="off"></input>
                    </div>

                    <div className="form-group">
                      <div className="row">
                        <div className="col-xs-5 pull-right">
                          <input type="submit" name="login-submit" id="login-submit" tabindex="4" className="form-control btn btn-success" value="Log In"></input>
                        </div>
                      </div>
                    </div>

                    <input type="hidden" className="hide" name="token" id="token" value="a465a2791ae0bae853cf4bf485dbe1b6"></input>
                  </form>
                </div>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
        );
}
}

export default Header;
