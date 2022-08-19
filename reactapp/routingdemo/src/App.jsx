import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import './App.css';
import SearchWiki from "./SearchWiki";
import DisplayDetail from "./DisplayDetail";
import Dropdown from "./Dropdown";
import "bootstrap/dist/css/bootstrap.css";

const options = [
    {
        label: 'Red Color',
        value: 'red'
    },
    {
        label: 'Green Color',
        value: 'green'
    },
    {
        label: 'Blue Color',
        value: 'Blue'
    }
];

const App = () => {

    const [term, setTerm] = useState('Programmer');
    const [rows, setData] = useState([]);
    const [sel, setSelected] = useState(options[0].label);
    const [pages,setPages] = useState('');

    const UpdateTerm = (event) => {
        var stext = event.target.value;
        setTerm(
            stext
        )
    }

    const handleSelection = (event) => {
        let selcolor = event.currentTarget.value;
        setSelected(selcolor);
    }

    async function getWikiDetails(term){
        let obj = [];
        let url = `https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=5&gsrsearch=${term}`;
        const resp = await axios.get(url).then((s) => { 
         
        setData(s.data) 
        });
    }

    useEffect(() => {
        getWikiDetails(term);
              
        if (rows.query && rows.query.pages){
            
            var a = Object.keys(rows.query.pages);
            console.log(rows.query.pages[a[0]]);

                a.forEach(element => {
                    var data=rows.query.pages[element];
                console.log('Index:',data.index,' Title:',data.title);
               });
              
               var pageData= a.map(idx=>{
                return (<div className="table-bordered">
                    <div className="table-row">Title:{rows.query.pages[idx].title}</div>
                    <div>
                        <a target='_blank' href={`http://en.wikipedia.org/?curid=${idx}`}>
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
            <p className="pagetitle">Welcome to Wikipedia</p>
            <hr />
            <SearchWiki handleClick={UpdateTerm} />
            <DisplayDetail dataRows={rows} />
            <div>Selected color is: {sel}</div>
            <Dropdown options={options} onSelectedChange={handleSelection} />

            <div>{pages}</div>
        </div>
    )
}

export default App;