import express from 'express'
import { PrismaClient } from '@prisma/client/extension'

const prisma = new PrismaClient();
const router = express.Router();

router.post('/users', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = await prisma.user.create({
            data: { username, email, password }
        });
        res.json(user);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/users/:id', async (req, res) => {
    try {
        const user = await prisma.user.findUnique({
            where: { id: parseInt(req.params.id) }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/users', async (_, res) => {
    try {
        const users = await prisma.user.findMany();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

router.post('/albums', async (req, res) => {
    try {
        const { title, artist, releaseDate, genre } = req.body;
        const album = await prisma.album.create({
            data: { title, artist, releaseDate, genre }
        });
        res.json(album);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/albums/:id', async (req, res) => {
    try {
        const albums = await prisma.album.findUnique({ where: {id: parseInt(req.params.id)} });
        res.json(album);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

router.post('/songs', async (req, res) => {
    try {
        const songs = await prisma.song.create({
            data: { title, artist, albumId, releaseDate, url }
        });
        res.json(song);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/songs/:id', async (req, res) => {
    try {
        const song = await prisma.song.findUnique({ where: { id: parseInt(req.params.id) } });
        res.json(song);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

router.get('/songs', async (_, res) => {
    try {
        const songs = await prisma.song.findMany();
        res.json(songs);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/library', async (req, res) => {
    try {
        const { userId, songId } = req.body;
        const libraryEntry = await prisma.library.create({
            data: { userId, songId }
        });
        res.json(libraryEntry);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/library/:userId', async (req, res) => {
    try {
        const library = await prisma.library.findMany({
            where: { userId: parseInt(req.params.userId) },
            include: { song: true }
        })
        res.json(library);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/listens', async (req, res) => {
    try {
        const { userId, songId } = req.body;

        const user = await prisma.user.findUnique({ where: { id: userId } });
        const song = await prisma.song.findUnique({ where:  { id: songId }});

        if (!user || !song) {
            return res.status(404).json({ error: 'User or song not found!' });
        }

        const listen = await prisma.listen.create({
            data: {
                userId,
                songId
            }
        });
        res.json(listen);        

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;