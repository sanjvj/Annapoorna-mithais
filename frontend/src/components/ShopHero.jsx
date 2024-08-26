import React from 'react'

const ShopHero = () => {
  return (
    <div>
      <div className="w-full pt-[32px] pb-[32px]" style={{ backgroundImage: 'url(background.svg)' }}>
        <div className="gap-4 text-center mt-4">
          <h1 className="font-Philosopher text-[32px] font-black bg-gradient-to-r from-[#A5813B] to-[#8F6109] text-transparent bg-clip-text leading-[35.84px] pb-[12px]">
            Festivities are Flat Without Sweets
            </h1>
          <p className="font-Nunito text-[12px] text-[#606060] font-normal leading-[16px]">
            Order now to ensure your festivities are filled with joy and flavor!
          </p>
        </div>
      </div>
    </div>
  )
}

export default ShopHero
