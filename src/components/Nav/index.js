import React from 'react';

function Nav(props) {
    const {
        setSection,
    } = props


    return (
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/">
                    Portfolio!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a data-testid="about" href="#about" onClick={()=> setSection("About")}>
                            About me
                        </a>
                    </li>
                    <li className={`mx-2`}>
                        <a data-testid="contact" href="#contact" onClick={() => setSection("Contact")}>
                            Contact me
                        </a>
                    </li>
                    <li className="mx-2">
                        <a data-testid="portfolio" href="#portfolio" onClick={() => setSection("Portfolio")}>
                            Portfolio
                        </a>
                    </li>
                    <li className="mx-2">
                        <a data-testid="resume" href="#resume" onClick={() => setSection("Resume")}>
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;
