import React from "react";

type FormProps = React.ComponentProps<"input"> & {
    setName: React.Dispatch<React.SetStateAction<string>>;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    setMessage: React.Dispatch<React.SetStateAction<string>>
    modalEnviando: boolean;
    name: string;
    email:string;
    message:string;
}

function Formulario({setName, setEmail, setMessage, name, email, message, modalEnviando}: FormProps){

    return(
        <>
                <input type="text" onChange={({currentTarget}) => setName(currentTarget.value)} placeholder="Nome Completo" value={name} />
                <input type="text" onChange={({currentTarget}) => setEmail(currentTarget.value)} placeholder="E-mail" value={email} />
                <textarea name="text" onChange={({currentTarget}) => setMessage(currentTarget.value)} placeholder="Escreva sua mensagem aqui..." value={message}/>
                <input className="btnEmail btnEfeito" type="submit" value={modalEnviando?'Enviando...': 'Enviar'} />
           
        </>
    )
}



export default Formulario;