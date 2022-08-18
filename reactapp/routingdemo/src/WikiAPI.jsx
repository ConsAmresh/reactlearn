import React from "react"
import { useState, useEffect } from "react";
import axios from "axios";

const WikiAPI =() =>{
    const [term, setTerm] = useState('voip');
    const [rows, setData] = useState([]);
    const [pages,setPages] = useState('');

    const UpdateTerm = (event) => {
        var stext = event.target.value;
        setTerm(stext);
    }

    async function getWikiDetails(term){
        let url = `https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=5&gsrsearch=${term}`;
        const resp = await axios.get(url).then((s) => { 
        setData(s.data) 
        });
    }

    useEffect(() => {
        getWikiDetails(term);
              
        if (rows.query && rows.query.pages){
                var a = Object.keys(rows.query.pages);
                a.forEach(element => {
                    var data=rows.query.pages[element];
                 });
              
               var pageData= a.map(idx=>{
                return (<div key={idx} className="table-bordered">
                    <div className="table-row">Title:{rows.query.pages[idx].title}</div>
                    <div>
                        <a target='_blank'  href={`http://en.wikipedia.org/?curid=${idx}`}>
                        {`http://en.wikipedia.org/?curid=${idx}`}
                        </a>
                    </div>
                </div>)
               });
               setPages(pageData);
        }
    }, [term]);

    return (
                <div>
                    <p className="pagetitle">Search Wikipedia</p>
                    <span>Enter Keyword: <input onChange={UpdateTerm} type="text"/></span>
                    <hr />
                    <div>{pages}</div>
                </div>
            )
}

export default WikiAPI;