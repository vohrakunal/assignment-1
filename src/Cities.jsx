import React from 'react';

export default function Cities (){

    const citiesData = [
        {
            label: "Mumbai",
            value: 'mumbai'
        },
        {
            label: "Hyderabad",
            value: 'hyderabad'
        },
        {
            label: "Pune",
            value: 'pune'
        },
        {
            label: "Goa",
            value: 'goa'
        },
        {
            label: "Chennai",
            value: 'chennai'
        },
        {
            label: "Delhi",
            value: 'delhi'
        }
    ]

    return (
        <>
            {citiesData.map((data,index)=>{
                return (
                    <>
                        {data.label}
                    </>
                )
            })}

        </>
    )

}