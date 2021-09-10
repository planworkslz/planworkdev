//Bibliotecas em javasccript
const express = require('express')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './uploads')
    },
    filename: (req, file, cb) => {
      cb(null, `${file.originalname}-${+Date.now()}`)
    }
  })
  
  

// Configurar o multer
const upload = multer({storage})




// Configurar o app
const app = express()

// Api de envio de arquivo
app.post('/', upload.single('planta'), (req, res, next) => {
    const planta = req.file
    console.log(req.file)
    res.send(planta)
   
})


app.get('/download', (req, res, next)=>{
    const arquivo = `uploads/${req.query.arquivo}`  
    res.download(arquivo)
})



app.listen(3001, ()=> {
    console.log('Rodando API na porta 3001!')
})