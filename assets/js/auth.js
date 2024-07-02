import { auth } from './firebase.js'
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"

document.addEventListener('DOMContentLoaded', () => {
    const formLogin = document.querySelector('.form-login')
    const emailInput = document.querySelector('.email-admin')
    const senhaInput = document.querySelector('.senha-admin')
    const linkSair = document.querySelector('.link-sair')
    const formPost = document.querySelector('.form-post')
    const tituloLogin = document.querySelector('.titulo-login')
    const mensagens = document.querySelector('.mensagens')

<<<<<<< HEAD
//Mensagens
    const logadoSucesso = ()=>{
        mensagens.innerHTML = 'Usuário logado com sucesso.'
    }
    const verifiqueConexao = () => {
        mensagens.innerHTML = 'Verifique sua conexão, email ou senha.'
    }

    const logoutSucesso = ()=>{
        mensagens.innerHTML = 'Logout realizado com sucesso'
    }

    const erroInesperado = ()=>{
        mensagens.innerHTML = 'Aconteceu um erro inacreditavel'
    }
//evento de login 
if(formLogin) {
    formLogin.addEventListener('submit', (e) => {
        e.preventDefault()
        const email = emailInput.value
        const senha = senhaInput.value

            signInWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                const user = userCredential.user
                logadoSucesso()
                emailInput.value = ''
                senhaInput.value = ''
            })
            .catch(()=>{
                verifiqueConexao()
            })
        
    })
}
  
    // Evento de Logout
   if(linkSair){
    linkSair.addEventListener('click',() =>{
        signOut(auth)
        .then(()=>{
            logoutSucesso()
        })
        .catch(()=>{
            erroInesperado()
        })
    })
}
    //Mudança de estado (elementos)
    onAuthStateChanged(auth, (user)=>{
        if(user){
            const uid = user.uid
=======
    // mensagens
    const logadoSucesso = () =>{
        mensagens.innerHTML = 'Usuário logado com sucesso.'
    }

    const verifiqueConexao = () =>{
        mensagens.innerHTML = 'Verifique a sua conexão ou o seu email e senha.'
    }

    const logoutSucesso = () =>{
        mensagens.innerHTML = 'Logout realizado com sucesso.'
    }

    const erroInesperado = () =>{
        mensagens.innerHTML = 'Ocorreu um erro inesperado.'
    }



    // Evento de login
    if (formLogin) {
        formLogin.addEventListener('submit', (e) => {
            e.preventDefault()
            const email = emailInput.value
            const senha = senhaInput.value

            signInWithEmailAndPassword(auth, email, senha)
                .then((userCredential) => {
                    const user = userCredential.user
                    logadoSucesso()
                    emailInput.value = ''
                    senhaInput.value = ''
                })
                .catch(() => {
                    verifiqueConexao()
                })
        })
    }

    // Evento de logout
    if (linkSair) {
        linkSair.addEventListener('click', () => {
            signOut(auth)
                .then(()=>{
                    logoutSucesso()
                })
                .catch(()=>{
                    erroInesperado()
                })
        })
    }

    // Mudança de estado
    onAuthStateChanged(auth,(user)=>{
        if(user){
            const uid = user.uid

>>>>>>> 3722622a3af41d6ce7b1ed341faaffb75a3cf8cf
            if(linkSair) linkSair.classList.remove('hide')
            if(formLogin) formLogin.classList.add('hide')
            if(formPost) formPost.classList.remove('hide')
            if(tituloLogin) tituloLogin.innerHTML = 'ACESSO AO ADMINISTRADOR LIBERADO'
        }else{
            if(linkSair) linkSair.classList.add('hide')
<<<<<<< HEAD
            if(formLogin)formLogin.classList.remove('hide')
            if(formPost) formPost.classList.add('hide')
            if(tituloLogin) tituloLogin.innerHTML = 'FAÇA O LOGIN COMO ADMINISTRADOR'
        }
    })

=======
            if(formLogin) formLogin.classList.remove('hide')
            if(formPost) formPost.classList.add('hide')
            if(tituloLogin) tituloLogin.innerHTML = 'FAÇA O LOGIN COMO ADMINISTRADOR!'
        }
    })


>>>>>>> 3722622a3af41d6ce7b1ed341faaffb75a3cf8cf
})
