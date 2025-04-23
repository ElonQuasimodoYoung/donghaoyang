import clsx from 'clsx'
import React from 'react'

const ItemLayout = ({children, className}) => {
  return <div className={clsx('custom-bg p-8 rounded-xl flex items-center justify-center', className)}>
          {children}
         </div>
}

const AboutDetails = () => {
  return (
    <section className='py-20 w-full'>
      <div className='grid grid-cols-12 gap-8 w-full'>
        <ItemLayout className={'col-span-8 row-span-2 flex-col items-start'}>
          <p className='font-light'>
            placeholder placeholder placeholder placeholder placeholder placeholder 
            placeholder placeholder placeholder placeholder placeholder placeholder 
            placeholder placeholder placeholder placeholder placeholder placeholder 
            placeholder placeholder placeholder placeholder placeholder placeholder 
            placeholder placeholder placeholder placeholder placeholder placeholder 
            placeholder placeholder placeholder placeholder placeholder placeholder 
          </p>
        </ItemLayout>
        <ItemLayout className={'col-span-4 flex-col items-start text-accent'}>
            <h2 className='font-semibold w-full text-top text-2xl mb-2'>
              Education:
            </h2>
            <p className='mb-2 font-light'>
              Bachelor of Computer Science at the University of Queensland
            </p>
            <p className='mb-2 font-light'>
              Master of Software Engineering at the University of Melbourne
            </p>
        </ItemLayout>

        <ItemLayout className={'col-span-4 text-accent'}>
          <p className='font-semibold w-full text-left text-3xl'>
            6+ <sub className='font-light text-base'>months of part-time work experience as a front-end engineer</sub>
          </p>
        </ItemLayout>
      </div>
    </section>
  )
}

export default AboutDetails