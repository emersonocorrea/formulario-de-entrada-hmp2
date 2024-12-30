"use client"
import { centroDeCusto } from "@/data/centrosDeCusto"

import { SubmitHandler, useForm } from "react-hook-form"

type Inputs = {
  id: number,
  name: string,
  mother: string,
  bDate: Date,
  customCenter: string[],
  hourDate:  Date,
  service: number,
  password: number
}

const Page = () => {

  const {handleSubmit, register} = useForm<Inputs>()
  const handleFormSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
    
  }

  return(
    <div className="w-screen h-screen flex flex-col items-center justify-center">

        
        <form onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col w-[370px] gap-6 bg-white text-gray-500 p-4 rounded-md shadow-md">
          <input 
            {...register('name')}
            placeholder="Nome do paciente" 
            className="border-b border-gray-300"
          />
          <input 
            {...register('mother')} 
            placeholder="Nome da mãe"
            className="border-b border-gray-300"
          />
          <input 
            {...register('bDate')}
            type="date"
            placeholder="Data de nascimento" 
            className="border-b border-gray-300"
          />
          <select {...register('customCenter')}>
            {centroDeCusto.map(item => 
              <option key={item.id}>{item.name}</option>
            )}
          </select>
          <input {...register("hourDate")} 
            className="hidden"
            value={new Date().getHours()}
          />
          <input 
            type="submit" 
            value="Enviar" 
            className="bg-blue-500 rounded-md p-1 text-white font-bold"
          />
        </form>
        
    </div>
  )
}

export default Page