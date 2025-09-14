import React, { createContext, useContext } from 'react'
import { useState } from 'react';
const Wishlistcontext1 = createContext();
export const usewishlist = () => useContext(Wishlistcontext1);
function Wishlistcontext({ children }) {
    const [wishlist, setwishlist] = useState({});
    const togglewishlist = (product) => {
        setwishlist({ ...wishlist, [product]: !wishlist[product] });
        alert(!wishlist[product]
            ? `${product} added to your wishlist`
            : `${product} removed from your wishlist`

        );
    };
    return (
        <Wishlistcontext1.Provider value={{ wishlist, togglewishlist }}>{children}</Wishlistcontext1.Provider>


    );
};

export default Wishlistcontext;
