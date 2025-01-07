"use client"

import { centroDeCusto } from "@/data/centrosDeCusto"
import { SignUpForm } from "@/types/SignUpForm"

import { SubmitHandler, useForm } from "react-hook-form"



const Page = () => {

  const fullTime = new Intl.DateTimeFormat('pt-BR', {
    timeStyle: 'short',
    hour12: false,

  }).format()

  

  const {    
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<SignUpForm>()

  const handleFormSubmit: SubmitHandler<SignUpForm> = (data) => {
    
    console.log(data)
    
  }



  return(
    
    <div className="w-screen h-screen flex flex-col items-center justify-center">

        
        <form onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col w-[370px] gap-6 bg-white text-gray-500 p-4 rounded-md shadow-md">

          
          <input 
            {...register('name', {required: true, minLength: 4, maxLength: 20})}
            placeholder="Nome do paciente" 
            className="border-b border-gray-300"
          />
          {errors.name && <small>Preencha o campo corretamente...</small>}

          <input 
            {...register('mother', {required: true})} 
            placeholder="Nome da mãe"
            className="border-b border-gray-300"
          />
          <input 
            {...register('bDate', {required: true})}
            type="date"
            placeholder="Data de nascimento" 
            className="border-b border-gray-300"
          />
          <select {...register('customCenter')} 
            className="border-b border-gray-300">
            {centroDeCusto.map(item => 
              <option key={item.id}>{item.name}</option>
            )}
          </select>
          <input {...register("hourDate")} 
            className="hidden"
            value={fullTime}
          />
          <input {...register("service")} 
            className="hidden"
            value={Math.floor(Math.random() * (5000 - 1) + 1)}
          />
          <input 
            type="submit" 
            value="Enviar" 
            className="bg-blue-500 rounded-md p-1 text-white font-bold hover:bg-blue-400 transition-colors cursor-pointer"
          />
        </form>
        
    </div>
  )
}

export default Page