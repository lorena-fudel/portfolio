import { Request, Response } from 'express';
import pool from '../config/db';

// Obtener tecnologías
export const getTechnologies = async (req: Request, res: Response) => {
    try {
        const result = await pool.query('SELECT * FROM technologies ORDER BY display_order ASC, name ASC');
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching technologies', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Obtener experiencia
export const getExperiences = async (req: Request, res: Response) => {
    try {
        const result = await pool.query('SELECT * FROM experiences ORDER BY is_current DESC, start_date DESC');
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching experiences', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Obtener propósitos
export const getGoals = async (req: Request, res: Response) => {
    try {
        const result = await pool.query('SELECT * FROM goals ORDER BY display_order ASC');
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching goals', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Guardar un mensaje de contacto
// Guardar un mensaje de contacto
export const saveMessage = async (req: Request, res: Response) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        res.status(400).json({ error: 'Todos los campos son requeridos' });
        return;
    }

    try {
        const queryText = 'INSERT INTO messages(name, email, subject, message) VALUES($1, $2, $3, $4) RETURNING id';
        const values = [name, email, subject, message];
        const result = await pool.query(queryText, values);

        res.status(201).json({
            message: 'Mensaje enviado correctamente',
            id: result.rows[0].id
        });
    } catch (error) {
        console.error('Error saving message', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
