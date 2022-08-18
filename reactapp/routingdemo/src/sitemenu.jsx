import React from "react";
import Link from "./Link";

const SiteMenu =()=>{
    return(
        <div> 
        <span >
          <Link href="/">Home</Link>
        </span>

        <span style={{marginLeft:20}}> 
          <Link  href="/aboutus">About us</Link>
        </span> 

        <span style={{marginLeft:20}}> 
        <Link  href="/contactus">Contact us</Link>
        </span> 

        <span style={{marginLeft:20}}> 
        <Link  href="/wikiapi">Wiki Search</Link>
        </span> 

        <span style={{marginLeft:20}}> 
        <Link  href="/wikiapi/api">Wiki API</Link>
        </span> 
      </div>
    );
}

export default SiteMenu;