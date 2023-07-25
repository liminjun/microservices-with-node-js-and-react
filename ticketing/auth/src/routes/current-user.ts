import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();

router.get('/api/users/currentuser', (req, res) => {
    debugger
    if (!req.session?.jwt) {
        console.log('no jwt')
        return res.send({ currentUser: null });
    } else {
        try {
            console.log('start verify')
            console.log(req.session.jwt);
            const payload = jwt.verify(req.session.jwt, process.env.JWT_KEY!);
            res.send({ currentUser: payload });
        } catch (err) {
            return res.send({ currentUser: null });
        }
    }
});

export { router as currentUserRouter };