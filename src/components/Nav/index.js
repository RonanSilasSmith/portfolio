import React from 'react';

function Nav(props) {
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
                        <a data-testid="about" href="#about">
                            About me
                        </a>
                    </li>
                    <li className={`mx-2`}>
                        <a data-testid="contact" href="#about">
                            Contact me
                        </a>
                    </li>
                    <li className="mx-2">
                        <a data-testid="portfolio" href="#about">
                            Portfolio
                        </a>
                    </li>
                    <li className="mx-2">
                        <a data-testid="resume" href="#about">
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;
