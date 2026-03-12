export function criarUsuario() {

  return {
    nome: "Usuário Cypress",
    email: `usuario${Date.now()}@qa.com`,
    password: "123456",
    administrador: "true"
  }

}