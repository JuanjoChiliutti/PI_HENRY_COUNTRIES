import React from 'react'
import './Paginate.css'

function Paginate({countries, countriesPerPage, paginate}) {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(countries.length / countriesPerPage); i++) {
        pageNumbers.push(i);
    }
  return (
    <nav>
        <ul className="pagination">
            {pageNumbers?.map(number => (
                // <li key={number} className="page-item"> 
               
                    <button key= {number} onClick={() => paginate(number)} className="page-link">
                        {number}
                    </button>
                // </li>
            ))}
        </ul>
    </nav>
    
  )
}

export default Paginate