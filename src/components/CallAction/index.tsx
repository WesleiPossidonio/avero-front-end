import Image from '../../assets/CallAction.jpg'

export const CallAction = () => {
  return (
    <section
      className="w-full h-[15.625rem] md:h-[35rem] bg-cover bg-center py-10 
      flex flex-col items-center justify-center gap-4"
      style={{ backgroundImage: `url(${Image})` }}
    >
      <div>
        <h1 className='text-3xl p-4 text-center md:text-6xl text-white'>
          Exclusividade que transforma o seu estilo.
        </h1>
      </div>
    </section>
  )
}
