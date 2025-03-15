require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Sua string de conexão
const mongoURI = process.env.MONGO_URI || "mongodb+srv://TechChallenge2:techchallenge2@tech-challenge2.5trst.mongodb.net/?retryWrites=true&w=majority&appName=Tech-challenge2";

// Conectando ao MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conectado ao MongoDB com sucesso!');
  })
  .catch((err) => {
    console.log('Erro ao conectar ao MongoDB:', err);
  });

// Criando o modelo Post diretamente no arquivo server.js
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Post = mongoose.model('Post', postSchema);

app.get('/', (req, res) => {
    res.send('API do Tech Challenge está rodando!');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

// Endpoint para listar todos os posts
app.get('/posts', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: "Erro ao listar posts", error: err });
  }
});

// Endpoint para ler um post específico pelo ID
app.get('/posts/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findById(id);
    if (post) {
      res.json(post);
    } else {
      res.status(404).json({ message: 'Post não encontrado' });
    }
  } catch (err) {
    res.status(500).json({ message: "Erro ao buscar o post", error: err });
  }
});

// Endpoint para criar um novo post
app.post('/posts', async (req, res) => {
  const { title, content, author } = req.body;

  try {
    const newPost = new Post({
      title,
      content,
      author,
    });

    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    console.error("Erro ao criar post:", error);
    res.status(500).json({ error: "Erro ao criar post" });
  }
});

// Endpoint para editar um post
app.put('/posts/:id', async (req, res) => {
  const { id } = req.params;
  const { title, content, author } = req.body;

  try {
    const updatedPost = { title, content, author };
    const post = await Post.findByIdAndUpdate(id, updatedPost, { new: true });

    if (!post) {
      return res.status(404).json({ error: "Post não encontrado" });
    }

    res.json(post);
  } catch (error) {
    console.error("Erro ao editar post:", error);
    res.status(500).json({ error: "Erro ao editar post" });
  }
});

// Endpoint para excluir um post
app.delete('/posts/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Post.findByIdAndDelete(id);
    if (post) {
      res.status(204).send(); // Retorna 204 (No Content) após excluir
    } else {
      res.status(404).json({ message: 'Post não encontrado' });
    }
  } catch (err) {
    res.status(500).json({ message: "Erro ao excluir post", error: err });
  }
});

// Endpoint para buscar posts por palavras-chave
app.get('/posts/search', async (req, res) => {
    const { query } = req.query;
  
    // Se a query não for fornecida
    if (!query) {
      return res.status(400).json({ message: 'Por favor, forneça um termo de pesquisa.' });
    }
  
    try {
      const filteredPosts = await Post.find({
        $or: [
          { title: { $regex: query, $options: 'i' } },
          { content: { $regex: query, $options: 'i' } },
        ],
      });
  
      if (filteredPosts.length > 0) {
        return res.json(filteredPosts);
      } else {
        return res.status(404).json({ message: 'Nenhum post encontrado com o termo pesquisado.' });
      }
    } catch (error) {
      console.error('Erro na busca por posts:', error);
      res.status(500).json({ message: 'Erro ao buscar os posts.' });
    }
  });
  
  
  
  



