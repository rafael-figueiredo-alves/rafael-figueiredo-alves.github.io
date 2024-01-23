export const Offcanvas = () => {
    return(
        <div className="offcanvas offcanvas-start" id="SidebarOffcanvas" aria-labelledby="Side bar - Offcanvas" style={{backgroundColor: '#336699', color: 'White'}}>
            <div className="offcanvas-header justify-content-end" data-bs-theme="dark">
                <button type="button" style={{color: 'white'}} className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <div>
                    Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                </div>
                <div className="dropdown mt-3">
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                        Dropdown button
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}