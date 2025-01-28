import React from 'react'
import { Reviews } from '../assets/fileSuplier'
import TestenomialCards from '../Components/TestenomialCards'

const Testenominals = () => {
  return (
    <div className='w-full mx-auto bg-linear-120 from-[#ffa000] to-[#ff0d00]  flex md:flex-row flex-row flex-wrap items-center justify-center gap-4  '>
        {
            Reviews.map((item, index) => {
                return (
                    <TestenomialCards
                        profilePicture={item.profilePicture}
                        name={item.name}
                        batch={item.batch}
                        working={item.working}
                        review={item.desc}
                        index={index}
                    />
                )
            })
        }
    </div>
  )
}

export default Testenominals