import React from "react";

function BannerName({name, discount, link}) {
    return (
        <div className="bannerContent">
            <h3>Hey {name}</h3>
            <p>
                new discount coupons are here!<span>$ {discount}</span>
            </p>

            <a href={link}>Learn More</a>
        </div>
    );
}

export default BannerName;