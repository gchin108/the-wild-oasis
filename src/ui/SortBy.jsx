import React from 'react'
import Select from './Select'
import { useSearchParams } from 'react-router-dom'

export default function SortBy({options}) {
    const [searchParams, setSearchParams] = useSearchParams()

    const currentSelected = searchParams.get("sortBy") || ""
    // console.log(currentSelected)

    function handleChange(e){
        //adding another params to the url based on the selected option
        searchParams.set("sortBy", e.target.value)
        setSearchParams(searchParams)
    }
  return (
    <Select options={options} type="white" onChange={handleChange} value={currentSelected}/>
  )
}
