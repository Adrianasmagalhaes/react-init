import React, { useRef } from 'react'

export default function FormBook() {
    let refAutor= useRef ()
    
    let refForm = useRef()

    const submit = e =>{
        console.log('Form', e.target)
        e.preventDefault();

         const form= e.target
        const data = new FormData(form);
        //criador de objetos  Object.fromEntries 
        const jason = Object.fromEntries(data.entries());
        console.log(jason)

      console.log('Autor',  refAutor.current.value);
    }
  return (
    <div>
        <form ref={refForm} onSubmit={submit}>
            <label htmlFor="">Autor</label>
            <input ref={refAutor} type="text" name="autor" id="autor"/>

            <label htmlFor="">Titulo</label>
            <input type="text" name="titulo" id="titulo" />

            <label htmlFor="">Ano</label>
            <input type="text" name="ano" id="ano" />
           
           <button type='submit'>Enviar</button>
           <button type="reset">Limpar</button>
        </form>
    </div>
  )
}