'use strict';



const button = document.querySelector('button');

let option;

const debounce = (func, delay, option = { leading: false, trailing: true }) => {
    let timeoutId = null;
    return (...args) => {
        let isInvoked = false;
        if(timeoutId === null && option.leading){
            func.call(this, ...args);
        }
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            if(option.trailing && !isInvoked){
                func.call(this, ...args);
            }
            timeoutId = null;
        }, delay)
    }
}

const clickMe = () => console.log('Added to cart');

const decoratedDebounce = debounce(clickMe, 300, option = { leading:true, trailing: true });

button.addEventListener('click', decoratedDebounce);