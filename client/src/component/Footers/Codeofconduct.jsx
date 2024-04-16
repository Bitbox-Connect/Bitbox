import '../css/Main.css';
import PropTypes from 'prop-types';

const CodeOfConduct = () => {
    return (
        <div>
            <div className="container codeofconduct-container">
                <h2 className='text-center Heading-Page my-3'>Code Of Conduct</h2>
                <div className="cont-box">
                    <div className="contents">
                        <div className="position-relative m-2 p-2 fs-5">
                            Once you have created a username for yourself, maintain the same throughout the program. If any participant changes his/her username, then the username which is not registered with the organizing committee will cease to be a part of the program.
                            <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-primary border">
                                1
                            </span>
                        </div>
                    </div>
                </div>
                <div className="cont-box">
                    <div className="contents">
                        <div className="position-relative m-2 p-2 fs-5">
                            Once you have created a username for yourself, maintain the same throughout the program. If any participant changes his/her username, then the username which is not registered with the organizing committee will cease to be a part of the program.
                            <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-primary border">
                                2
                            </span>
                        </div>
                    </div>
                </div>
                <div className="cont-box">
                    <div className="contents">
                        <div className="position-relative m-2 p-2 fs-5">
                            Once you have created a username for yourself, maintain the same throughout the program. If any participant changes his/her username, then the username which is not registered with the organizing committee will cease to be a part of the program.
                            <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-primary border">
                                3
                            </span>
                        </div>
                    </div>
                </div>
                <div className="cont-box">
                    <div className="contents ">
                        <div className="position-relative m-2 p-2 fs-5">
                            Once you have created a username for yourself, maintain the same throughout the program. If any participant changes his/her username, then the username which is not registered with the organizing committee will cease to be a part of the program.
                            <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-primary border">
                                4
                            </span>
                        </div>
                    </div>
                </div>
                <div className="cont-box">
                    <div className="contents ">
                        <div className="position-relative p-2 fs-5">
                            Once you have created a username for yourself, maintain the same throughout the program. If any participant changes his/her username, then the username which is not registered with the organizing committee will cease to be a part of the program.
                            <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-primary border">
                                5
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

CodeOfConduct.propTypes = {
    showAlert: PropTypes.func,
    mode: PropTypes.string,
  };

export default CodeOfConduct
