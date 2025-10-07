import { pool } from "../config/db";














export const createOne = async (req, res) => {
    try {
        const { user_id, title, description } = req.body
        const query = await pool.query(`inser into collections (user_id, title, description )values($1, $2, $3) returning *`, 
            [user_id, title, description ]
        )
        return res.status(201).json({
            message: `collections created`,
            query: query.rows[0]
        })
    }catch(err) {
        console.log(err);
        return res.status(500).jsoon({
            message: `error in the server`
        })
        
    }
}

export const findOne = async (req, res) => {
    try{
        const { id } = req.params
        const query = await pool.query(`selelct * from collections where id= $1`, [id])
        return res.status(201).json({
            message: `collections founded`,
            query: query.rows[0]
        })

    }catch (err) {
        console.log(err);
        return res.status(500).json({
            message: `Error in the server`
        })
        
    }
}


export const findAll = async (req, res) => {
    try {
        const query = `select * from collections `
        return res.status(200).json({
            message: `collections founded`,
            query: query.rows
        })
    }catch(err) {
        console.log(err);
        return res.status(500).json({
            message: `eror in the server`
        })
        
    }
}

export const updateOne = async(req, res) => {
    try {
        const { id } = req.params
        const { title, description } = req.body
        const query = await pool.query(`update collections set title=$1, description=$2, updated_at=now() where id=$3 returning *`, [title, description, id])
        return res.status(200).json({
            message: `update collections`,
            query: query.rows[0]
        })
    }catch(err) {
        console.log(err);
        return res.status(500).json({
            message: `error in the server`
        })
        
    }
}

export const deleteOne = async(req, res) => {
    try {
        const { id } = req.params
        await pool.query(`delete from collections where id= $1`, [id])
        return res.status(202).json({
            message: `collections deleted`
        })
    }catch(err) {
        console.log(err);
        return res.status(500).json({
            message: `error in the server`
        })

    }
}