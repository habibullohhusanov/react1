import React from 'react'
import Input from '../UI/jsx/input'
import Select from '../UI/jsx/select'

function HookPostFilter({filter, setFilter}) {
  return (
    <div>
      <Input value={filter.query} onChange={event => setFilter({...filter, query: event.target.value})} placeholder="Search ..." />
      <Select value={filter.sort} defaultValue="Select one" options={[
        { value: "title", name: "Title" },
        { value: "body", name: "Body" },
      ]}
        onChange={event => setFilter({...filter, sort: event})}
      />
    </div>
  )
}

export default HookPostFilter