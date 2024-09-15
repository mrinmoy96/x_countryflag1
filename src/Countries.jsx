import React,{ useEffect, useState } from "react";
import CountryCard from "./CountryCard";



function Countries(){


	const API_ENDPOINT="https://xcountries-backend.azurewebsites.net/all" 


const[flags, setFlags]=useState([]);
console.log({flags})

useEffect(()=>{
	fetch(API_ENDPOINT)
	.then(res=>res.json())
	.then(data=>setFlags(data))
	.catch((error)=>console.error("Error fetching data :", error))
},[]);





	return <div
	style={{
		 display:"flex",
		 flexWrap:"wrap"

	}}
	>
	{
		flags.map((flag)=>{
			return <CountryCard name={flag.name} flagImg={flag.flag} flagAltText={flag.abbr}/>
		})
		
	}
		
	</div>
}
export default Countries;