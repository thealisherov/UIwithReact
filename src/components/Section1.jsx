import React from 'react'

export const Section1 = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="section_title mt-3 mb-2.5 md:mt-6 md:mb-5">
        <h1 className='text-center text-3xl sm:text-4xl md:text-5xl'>
          О компании <span className='text-amber-400'>LEANGROUP</span>
        </h1>
      </div>
      
      <div className='Section_data mt-5 mx-auto max-w-[1200px] w-full flex flex-col lg:flex-row gap-6 md:gap-8'>
        <div className='Section_media w-full lg:w-[44%] h-[200px] sm:h-[250px] md:h-[300px] mt-0 lg:mt-6'>
          <iframe
            className='w-full h-full'
            src="https://www.youtube.com/embed/19u4NDOHE9w?si=Dg5ycemeY_w360Ls"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        
        <div className='Section_p w-full lg:w-[47%] h-auto'>
          <p className='text-sm sm:text-base md:text-[16px] mt-2 sm:mt-2.5'>
            Компания ООО «ЛеанГрупп» начала свою деятельность в 1999 году и на сегодняшний день является ведущей компанией по производству ламинатных и экструзионных туб.
          </p>
          <p className='text-sm sm:text-base md:text-[16px] mt-2 sm:mt-2.5'>
            Имея две технологии – для производства ламинатных и экструзионных туб, мы предлагаем вам широкий спектр возможностей. Большим преимуществом является собственный печатный цех в ламинате и in-line печать в экструзии с возможностью различных дополнительных опций декора. Особое внимание уделяется работе с поставщиками для контроля и поддержания качества производимой нами продукции.
          </p>
          <p className='text-sm sm:text-base md:text-[16px] mt-2 sm:mt-2.5'>
            С января 2018 года компания стала членом Европейской Ассоциации производителей туб (ETMA), что подтверждает сильную позицию бренда и на рынке Европы.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Section1