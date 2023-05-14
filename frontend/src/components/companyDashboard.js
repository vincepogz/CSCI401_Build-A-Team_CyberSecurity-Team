import React from 'react';

function Company(props) {
    return (
        <>
        <div>
            <div className="m-2 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                    <div className="md:shrink-0">
                        <img className="h-48 w-full object-cover md:h-full md:w-48 object-scale-down" src={props.company.img} alt="Modern building architecture"/>
                    </div>
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-lg text-indigo-500 font-semibold">{props.company.name}</div>
                        <a href="#" className="block mt-6 text-lg leading-tight font-medium text-black hover:underline">Company Statistics:</a>
                        <p className="mt-2 text-slate-500">Current Cash: $ {props.company.current_cash}</p>
                        <p className="mt-2 text-slate-500">Operation Cost: $ {props.company.current_cost}</p>
                    
                    </div>
                </div>
            </div>

        </div>
        </>
    )
}

export default Company;