 import { pool } from "../config/db";














 export const findAll = async (req, res) => {
    try {
        const query = await pool.query(`select * from coins`)
        return res.status(200).json({
            message: `coins founded`,
            query: query.rows
        })
    }catch(err) {
        console.log(err);
        return res.status(500).json({
            message: `error in the server`
        })
        
    }
 }

 export const findOne = async (req, res) => {
    try{
        const { id } = req.params
        const query = pool.query(`selelect * from coins where id=$1`, [id])
        return res.status(200).json({
            message: `coins founded`,
            query: (await query).rows[0]

        })
    }catch(err) {
        console.log(err);
        return res.status(500).json({
            message: `error in the server`
        })
        
    }
 }

 export const createOne = async (req, res) => {
    try{
        const { name, country, year, material, value } = req.body
        const query = await pool.query(`insert into coins(name, country, year, material, value) values $1, $2, $3, $4, $5 returning *`, [name, country, material, value])
        return req.status(201).json({
            message: `coins created`,
            query: query.rows[0]

        })
    }catch(err) {
        console.log(err);
        return res.status(500).json({
            message: `Error in the server`
        })
        
    }
 }

 export const updateOne = async (req, res) => {
    try {
        const { id } = req.params
        const { name, value } = req.body
        const query = await pool.query(`update coins set name=$1, value=$2,  updated_at=now(), where id=$3, returning *`, [name, value, id])
        return res.status(200).json({
            message: `coins updated`,
            query: query.rows[0]

        })

    }catch (err) {
        console.log(err);
        return res.status(500).json({
            message: `Error in the server`
        })        
    }
 }

 export const deleteOne = async (req, res) => {
    try {
        const { id } = req.params
        await pool.query(`delete from coins where id=$1`, [id])
        return res.status(200).json({
            message: `coins deleted`
        })

    }catch(err) {
        console.log(err);
        return res.status(500).json({
            message: `Error in the server`
        })
        
    }
 }