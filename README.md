# back_end_med_prev 👾 [![Latest Version on Github](https://img.shields.io/github/release/wemersonrv/input-mask.svg?style=flat)]
Desenvolvimento de uma API (CRUD de pessoa) no padrão REST; Rotas (GET, POST, PUT,DELETE) totalmente funcional. 
- NODEJS 
- MONGODB
- MONGOOSE
- ROBO 3T
- EXPRESS
- ESLINT
- INSOMNIA 


# Objetivos 💻
- Desenvolvimento de uma API (CRUD de pessoa) no padrão REST; ✔️
- Protótipo completamente funcional; ✔️
- Tentar utilizar a maior parte das tecnologias;✔️
- Ter uma rota para listar os cadastros com paginação (GET);✔️
- Ter uma rota para cadastro/edição dos cadastros (POST/PUT);✔️
- Ter uma rota para excluir um cadastro pelo ID (DELETE);✔️
- No cadastro de endereço, poder cadastrar mais de um; 🟠 falta implemnetar 
- Aplicar validação dos campos obrigatórios; ✔️
- Aplicar testes automatizados com Jest; 🟠 falta implemnetar 
- Utilizar ESLint com a configuração AIRBNB; ✔️ 
- Entregar código fonte em um repositório público (GitHub, Bitbucket, etc…)✔️

# Tecnologias a serem utilizadas 🛠
- NodeJS ✔️
- MongoDB ✔️
- Koa 🟡 / acabei optando pelo express por trabalhar a mais tempo com ele.
- Mongoose (model) ✔️
- Git ✔️
- Joi (validações) 🟠 falta implemnetar 
- Jest 🟠 falta implemnetar 


# Campos (* são obrigatórios) ⌨️
- * Tipo: Pessoa física / Pessoa jurídica 
- * Nome 
- * Razão social (quando PJ) 
- * CPF (quando PF) 
- * CNPJ (quando PJ) 
- * Sexo (quando PF) 
- * Data de nascimento (quando PF) 
- Email
- Telefone
- Celular
- Foto (apenas URL)
- Endereço (array de itens)
- * Endereço
- * Número
- Complemento
- Bairro
- * Cidade
- * Estado
- CEP

Referências
● Joi: https://hapi.dev/module/joi/
● Mongoose: https://mongoosejs.com/


