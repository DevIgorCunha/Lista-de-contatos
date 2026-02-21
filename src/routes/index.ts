import express from 'express';
import { creatContact, deleteContact, getContatos } from '../services/contact';

export const router = express.Router();

router.post('/contato', async (req, res) => {
    const { name } = req.body;

    if (!name || name.length <2) {
        return res.json({ error: 'Nome precisa ter dois digitos.'})
    }

    await creatContact(name);

    res.status(201).json({ contato: name });
});

router.get('/contatos', async (req, res) => {
    let list = await getContatos();

    res.json({ contatos: list});
});

router.delete('/contato', async (req, res) => {
    const { name } = req.query;

    if(!name) {
        return res.json({ error: 'Precisa mandar um nome para excluir'})
    }

    await deleteContact(name as string);

    res.json({ contato: name});

});

export default router;