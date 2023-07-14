import React from 'react'
import Category from './Category'
import Merchandises from './Merchandises'

function index() {
  return (
    <div className="flex box-container bg-gray-100">
        <Category />
        <Merchandises />
    </div>
  )
}

export default index