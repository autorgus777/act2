var express = require('express');
var router = express.Router();
var PatrocinantesController = require('../controllers/patrocinantes-c')

/* GET users listing. */
router.get('/', async function(req, res, next) {
    res.send(await PatrocinantesController.Patrocinantes());
});

router.get('/:id', async function(req, res, next) {
    let id = req.params.id;
    res.send(await PatrocinantesController.patrocinantesID(id));
  });



/*POST Ingresar*/
router.post('/', function(req, res, next) {

    //ModalidadControllers.crear(req.body.Modalidad)
    //res.send(await ModalidadControllers.todos());
   PatrocinantesController.ingresarPatrocinantes(req.body).then(()=>{
       console.log("then create")
       PatrocinantesController.Patrocinantes().then((resultados)=>{
          console.log("then todos");
          res.send(resultados)
        })
      })
  });
  


module.exports = router;