import React from "react";

type FormProps = React.ComponentProps<"input"> & {
    setName: React.Dispatch<React.SetStateAction<string>>;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    setMessage: React.Dispatch<React.SetStateAction<string>>
    modalEnviando: boolean;
}

function Formulario({setName, setEmail, setMessage, modalEnviando}: FormProps){

    return(
        <>
                <input type="text" onChange={({currentTarget}) => setName(currentTarget.value)} placeholder="Nome Completo" />
                <input type="text" onChange={({currentTarget}) => setEmail(currentTarget.value)} placeholder="E-mail" />
                <textarea name="text" onChange={({currentTarget}) => setMessage(currentTarget.value)} placeholder="Escreva sua mensagem aqui..."/>
                <input type="submit" value={modalEnviando?'Enviando...': 'Enviar'} />
      
        </>
    )
}



export default Formulario;