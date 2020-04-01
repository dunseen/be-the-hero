const connection = require("../database/connections");

module.exports = {
    async create(req, res) {
        const { id } = req.body;

        const ongs = await connection("ongs")
            .where("id", id)
            .select("name")
            .first();

        if (!ongs) {
            return res
                .status(400)
                .json({ error: "Nenhuma ong registrada com esse ID !" });
        }
        return res.json(ongs);
    }
};