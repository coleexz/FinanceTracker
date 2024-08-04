import express, {Request, Response} from 'express'  
import FinancialRecordModel from '../schema/financial-record'

//router: es una instancia de express que se utiliza para definir las rutas de la aplicacion
const router = express.Router()

//ruta para obtener todos los registros financieros de un usuario
router.get('/getAllByUserId/:userId', async (req: Request, res: Response) => {
    try{
        const userId = req.params.userId
        const records = await FinancialRecordModel.find({userId: userId})

        if(records.length==0){
            //status 404 significa que no se encontraron registros
           return res.status(404).send("No records found")
        }

        //status 200 significa que la solicitud fue exitosa
        res.status(200).send(records)
    }catch(err){
        //status 500 significa que hubo un error en el servidor
        res.status(500).send(err)
    }
});

//post: ruta para crear un nuevo registro financiero
router.post('/', async (req: Request, res: Response) => {
    try{
        //busca todos los registros financieros
        const newRecordBody = req.body
        //pone el body coo un objeto de tipo FinancialRecordModel para mongoDB
        const newRecord = new FinancialRecordModel(newRecordBody);
        const savedRecord = await newRecord.save();

        res.status(200).send(savedRecord);

    }catch(err){
        //status 500 significa que hubo un error en el servidor
        res.status(500).send(err)
    }
});

//:id es un parametro que se puede pasar en la url
router.put('/:id', async (req: Request, res: Response) => {
    try{
        const id = req.params.id
        const newRecordBody = req.body
        const record = await FinancialRecordModel.findByIdAndUpdate(
            id,
            newRecordBody,
            {new: true}
        )
        
        if(!record){
            //status 404 significa que no se encontraron registros
            return res.status(404).send()
        }

        res.status(200).send(record)
    }catch(err){
        //status 500 significa que hubo un error en el servidor
        res.status(500).send(err)
    }
});


router.delete('/:id', async (req: Request, res: Response) => {
    try{
        const id = req.params.id
        const record = await FinancialRecordModel.findByIdAndDelete(id)
        if(!record){
            //status 404 significa que no se encontraron registros
            return res.status(404).send()
        }
        res.status(200).send(record)
    }catch(err){
        //status 500 significa que hubo un error en el servidor
        res.status(500).send(err)
    }
});


export default router;