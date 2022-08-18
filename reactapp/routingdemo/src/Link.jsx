import React from "react"; 

const Link =({href,children})=>{

    //Handle onclick event for link
    const onClick=(event)=>{
            event.preventDefault();
            window.history.pushState({},'',href);
            const navEvent =new PopStateEvent('popstate');
            window.dispatchEvent(navEvent);
            }

    return  (
                <a onClick={onClick} style={{cursor:"default"}} 
                href={href}>{children}</a>
            );
}

export default Link;