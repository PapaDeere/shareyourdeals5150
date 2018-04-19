import React from "react";
import "./Header.css";

const Header = () => (
    <header className="header section">
        <div className="header-inner section-inner">
            <div className="title-info">
                <h1 className="title-title">
                    <a id="head-title" href="#">Share Your Deals</a>
                </h1>
                <h3 className="title-description">
                    Share your best deals with friends and family.
                </h3>
            </div>
        </div>
    </header>
);

export default Header;
