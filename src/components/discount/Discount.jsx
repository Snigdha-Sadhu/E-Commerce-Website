import React from 'react'
import Button from '../button/Button'
import freshsruit from '../../assets/seasonal-fruit-png.webp'

const Discount = () => {
  return (
    <section className='md:rounded-full rounded-3xl bg-zinc-100 bg-no-repeat bg-cover bg-top bg-[length:80%_100px] mb-20 md:bg-[[length:100%_300px] md:h-100 h-84 ' style={{
      backgroundImage: `url(${freshsruit})`,
    }} >

      <div className=' flex  md:flex-row flex-col py-10 max-w-[1400px] px-10 py-10 mx-auto pt-20 md:pt-[200px] ' >

        <span className='md:text-7xl text-3xl text-lime-500 font-bold transform md:-rotate-90 self-center '>20%</span>
        <div className='max-w-[800px]'>
          <h2 className='md:text-5xl text-2xl font-bold'>First Order Discount!</h2>


          <p className='mt-4 mb-3'>Enjoy an exclusive first order discount on our grocery website! Shop fresh essentials and save big on your first purchase. Fast delivery and quality guaranteed. </p>

          <Button content='get a discount'></Button>
        </div>
      </div>

    </section>
  )
}

export default Discount
