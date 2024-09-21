export function createCart() {
    if (!localStorage.getItem('cart')) {
        localStorage.setItem('cart', JSON.stringify([]));  
    }
}

export function addItemToCart(itemConfig) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];  
    
    cart.push(itemConfig);
    localStorage.setItem('cart', JSON.stringify(cart));  
    
}

export function updateItemInCart(itemConfig) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    const updatedCart = cart.map(item => {
        if (item.id === itemConfig.id) {
            return itemConfig; 
        }
        return item;  
    });
    localStorage.setItem('cart', JSON.stringify(updatedCart));  
}

export function removeItemFromCart(itemId) {
    const cart = JSON.parse(localStorage.getItem('cart')) || []; 
    const updatedCart = cart.filter(item => item.id !== itemId);  
    localStorage.setItem('cart', JSON.stringify(updatedCart));  
}

export function getItemFromCart(itemId) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];  
    return cart.find(item => item.id === itemId);  
}
