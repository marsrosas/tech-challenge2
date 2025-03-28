# Documentação - Escola Avanço

## 1. **Introdução**
NNo cenário educacional atual, a falta de ferramentas adequadas dificulta a publicação e o compartilhamento de conteúdos educacionais de forma centralizada e acessível. A aplicação Escola Avanço foi desenvolvida para enfrentar esse desafio, permitindo que professores da rede pública publiquem aulas de maneira intuitiva e tecnológica, enquanto os alunos têm acesso fácil e organizado a esses materiais.

A aplicação utiliza uma arquitetura baseada em microsserviços, implementada com Node.js, MongoDB, e comunicação via REST APIs. Além disso, conta com containerização via Docker e automação de CI/CD com GitHub Actions, garantindo um ambiente escalável e consistente.

---

## 2. **Funcionalidades**
- **Usuários**
  - Cadastro e autenticação de usuários (via JWT).
  - Listagem, atualização e exclusão de usuários.

- **Aulas**
  - Criação, listagem, atualização e exclusão de aulas.
 
---

## 3. **Tecnologias Utilizadas**
- **Back-end:** Node.js, Express.js
- **Banco de Dados:** MongoDB com Mongoose
- **Autenticação:** JWT (JSON Web Tokens)
- **Testes:** Jest
- **Transpiler:** Babel
- **Containerização:** Docker
- **Automação de CI/CD:** GitHub Actions

---

## 4. **Estrutura do Projeto**

### **Arquivos na Raiz**
- **`.gitignore`**: Define arquivos e pastas que o Git deve ignorar no versionamento.
- **`DockerFile`**: Configuração do Docker para criar a imagem do projeto.
- **`README.md`**: Arquivo de documentação que descreve o propósito do projeto, além de como configurá-lo e usá-lo.
- **`babel.config.js`**: Configuração do Babel, usado para transpilar o código.
- **`docker-compose.yml`**: Arquivo para configurar serviços do Docker em containers.
- **`env`**: Armazena variáveis de ambiente.
- **`package-lock.json`**: Arquivo gerado automaticamente pelo npm para bloquear as versões das dependências.
- **`package.json`**: Lista as dependências do projeto e scripts npm, além de informações sobre o projeto.
- **`server.js`**: Arquivo principal que inicializa o servidor.

**Diretório `src` (código principal):**
- **`app.js`**: Configuração da aplicação Express (roteamento e middleware).
- **`config/dbConnect.js`**: Configuração para conectar ao banco de dados.
- **`controllers/aulaController.js`**: Lógica de controle relacionada às aulas.
- **`controllers/aulaController.test.js`**: Testes para o `aulaController`.
- **`controllers/usuarioController.js`**: Lógica de controle relacionada aos usuários.
- **`middleWare/authMiddleware.js`**: Middleware para autenticação.
- **`models/Aula.js`**: Modelo do banco de dados para aulas.
- **`models/PapelUsuario.js`**: Modelo para papéis de usuário.
- **`models/Usuario.js`**: Modelo do banco de dados para usuários.
- **`routes/aulasRoutes.js`**: Rotas relacionadas às aulas.
- **`routes/index.js`**: Ponto de entrada para todas as rotas.
- **`routes/usuariosRoutes.js`**: Rotas relacionadas aos usuários.

---

## 6. **Rotas Principais**

### **Usuários**
| Método | Rota               | Descrição                     |
|--------|--------------------|-------------------------------|
| POST   | `/api/usuarios`    | Criar novo usuário            |
| POST   | `/api/login`       | Autenticar usuário            |
| GET    | `/api/usuarios`    | Listar todos os usuários      |
| PUT    | `/api/usuarios/:id`| Atualizar um usuário          |
| DELETE | `/api/usuarios/:id`| Remover um usuário            |

### **Aulas**
| Método | Rota               | Descrição                     |
|--------|--------------------|-------------------------------|
| POST   | `/api/aulas`       | Criar nova aula               |
| GET    | `/api/aulas`       | Listar todas as aulas         |
| PUT    | `/api/aulas/:id`   | Atualizar uma aula            |
| DELETE | `/api/aulas/:id`   | Deletar uma aula              |

---

## 7. **Como Executar o Projeto**

### **Pré-requisitos**
- Node.js (versão mínima: 14.x)
- MongoDB (local ou remoto)
- Docker (para containerização)

### **Passos para Execução**
1. Clone o repositório e acesse o diretório:
   ```bash
   git clone https://github.com/svcguilherme/tech-challenge02
   cd tech-challenge02
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure o arquivo `.env`:
   ```env
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/techChallenge
   JWT_SECRET=<chave>
   ```

4. Execute a aplicação:
   ```bash
   npm run dev
   ```

5. Rode os testes:
   ```bash
   npm run test
   ```

---

## 8. **Desafios e Lições Aprendidas**
- **Desafios**
  - Integração do MongoDB com o Docker.
  - Implementação de testes para garantir a cobertura mínima exigida e validar funcionalidades críticas como criação, edição e exclusão de aulas e usuários.
  - Configuração do Jest e Babel para garantir compatibilidade com ECMAScript Modules.
  - Configuração inicial dos workflows no GitHub Actions, garantindo automação eficiente do pipeline de CI/CD.

- **Lições Aprendidas**
  - A importância de testes unitários e automatizados para garantir a qualidade do código e a confiabilidade do sistema.
  - Como a arquitetura REST e a containerização contribuem para escalabilidade e consistência.
  - O valor da automação com GitHub Actions para simplificar o fluxo de trabalho e melhorar a produtividade da equipe.

---

## 9. **Conclusão**
A **Escola Avanço** é uma solução tecnológica que visa facilitar a comunicação entre professores e alunos, promovendo a inclusão digital na rede pública de educação. O projeto integra conhecimentos em desenvolvimento de APIs, autenticação, testes e boas práticas de programação, sendo uma aplicação escalável e de fácil manutenção.
