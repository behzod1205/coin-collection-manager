import pool from "../db.js";













export const getCollectionCoins = async (req, res) => {
  try {
    const result = await pool.query(`
    SELECT cc.id, c.title AS collection_name, cn.name AS coin_name, cc.condition, cc.note, cc.added_at
    FROM collection_coins cc
    JOIN collections c ON cc.collection_id = c.id
    JOIN coins cn ON cc.coin_id = cn.id
    ORDER BY cc.id
  `);
  res.json(result.rows);
    } catch(err) {
        console.log(err);
        res.status(500).json({
            message: `Error in the server `
        })
        
    }
};




export const addCoinToCollection = async (req, res) => {
  const { collection_id, coin_id, condition, note } = req.body;
  const result = await pool.query(
    "INSERT INTO collection_coins (collection_id, coin_id, condition, note) VALUES ($1, $2, $3, $4) RETURNING *",
    [collection_id, coin_id, condition, note]
  );
  res.status(201).json(result.rows[0]);
};

export const deleteCollectionCoin = async (req, res) => {
  const { id } = req.params;
  await pool.query("DELETE FROM collection_coins WHERE id=$1", [id]);
  res.send("Coin removed from collection");
};
