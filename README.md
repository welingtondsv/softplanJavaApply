# SoftplanJavaApply

Projeto desenvolvido para processo de seleção da softplan.


# Descrição

O projeto se trata de uma aplicação para cadastro de pessoas,
utilizando como back-end a linguagem java.

## Recursos utilizados

 - Maven --> para gerenciar dependências e compilar.
 - Spring(base/core, jpa, hateoas, security)  --> para facilitar: a injeção de dependência, criação do serviço rest, segurança da aplicação,  controle de hipermídia.
 - H2 Database --> para base de dados.
 - Angular -->  front-end

## Utilizando a aplicacao - Back-end

Atualmente a aplicacao encontra-se disponivel em:  [http://31.220.60.231/](http://31.220.60.231/)

**credenciais:**

usuário: softplayer

senha: 123

**listagem de pessoas cadastradas:**

get -> http://31.220.60.231/pessoa/listar


**cadastro de nova pessoa:**

post -> http://31.220.60.231/pessoa/cadastrar

exemplo de body:
{
    "nome": "Welington dos Santos Vilhalva",
    "sexo": "Masculino",
    "email": "welingtondsv78@gmail.com",
    "dataNascimento": "1996-10-22",
    "naturalidade": "Campo Grande",
    "nacionalidade": "Brasileiro",
    "cpf": "17261798770"
}

**atualizar cadastro:**

put -> http://31.220.60.231/pessoa/atualizar/{{id-pessoa}}

exemplo de body:
{
    "nome": "Welington dos Santos Vilhalva",
    "sexo": "Masculino",
    "email": "welingtondsv78@gmail.com",
    "dataNascimento": "1996-10-22",
    "naturalidade": "Campo Grande",
    "nacionalidade": "Brasileiro",
    "cpf": "17261798770"
}

**deletar cadastro**

delete -> http://31.220.60.231/pessoa/deletar/{{id-pessoa}}

## Utilizando a aplicacao - Front-end

Ao acessar http://31.220.60.231 sera exibida uma listagem de pessoas cadastradas, podendo cadastrar uma nova, deletar ou editar.

## Imagem docker do projeto

Conforme especificação do processo, a imagem docker do projeto esta hospedada no docker-hub.

link do docker-hub -->https://hub.docker.com/r/welingtonvilhalva/softplan-selecao-java

comando para pull da imagem -- >*docker pull welingtonvilhalva/softplan-selecao-java*

## Gerar nova imagem apartir do codigo base

Para gerar nova imagem da aplicação é necessário:

 - maven
 - java jdk
 - angular-cli
 - docker
 
**gerar novo jar:**
mvn clean install

**gerar novo build do angular**
ng build

**gerar a imagem**

o projeto possui um arquivo de docker-compose podendo ser executado com o comando --> *docker-compose up*

a imagem também pode ser gerada usando somente o dockerfile atraves do comando --> *docker build .*

# Outras especificações

A imagem docker utiliza o nginx para servir os arquivos do angular(front-end)
e também para proxy reverso do endpoint da api.

O Front-end passa automaticamente as credenciais para consumo da api.
