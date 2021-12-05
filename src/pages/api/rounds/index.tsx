import { playGame } from "../../../helpers/api/rounds.ts";

export default (req, res) => {
    const result = playGame(req.body);

    res.statusCode = 209;
    res.json({ result });
}
