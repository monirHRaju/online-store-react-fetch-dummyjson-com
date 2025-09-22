const getCartFromLocalStorage = () => {
    const storedCartString = localStorage.getItem('cart')

    if(storedCartString) {
        const storedCart = JSON.parse(storedCartString)
        return storedCart;
    }
    return [];
}

const saveCart = cart => {
    const cartStringify = JSON.stringify(cart)
    localStorage.setItem('cart', cartStringify)
}

const addCartToLocalStorage = (id) => {
    const cart = getCartFromLocalStorage();
    const newCart = [...cart, id];

    saveCart(newCart)
}

const removeFromLocalStorage = (id) => {
    const storedCart = getCartFromLocalStorage();
    const remainingCart = storedCart.filter(storedId => storedId !== id);
    saveCart(remainingCart)
}

export {getCartFromLocalStorage as getStoredCart, 
    addCartToLocalStorage as addToStoredCart,
    removeFromLocalStorage as removeFromCart
}