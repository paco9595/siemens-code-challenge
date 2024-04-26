import { Request, Response } from "express";
import dataTemplates from '../data/data';

export async function getTemplateImages(req: Request, res: Response) {
    console.log(req.query)
    const page = Number(req.query.page) || 1
    const per_page = Number(req.query.per_page) || 4
    const slicedData = dataTemplates.slice((page * per_page) - per_page, per_page * page)
    return res.status(200).json({
        count: dataTemplates.length,
        data: slicedData
    })
}