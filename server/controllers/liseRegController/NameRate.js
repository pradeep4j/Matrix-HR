import NameRate from '../../models/lisReg/NameRate.js';

export const createNameRate = async (request, response, next) => {
    try {
        const data = request.body
        const regNos = await NameRate.findOne({regNo:request.body.regNo});
        if(regNos) {
            return response.send("409");
        }
        const { regNo, rate, status, company, executive, state, branch } = data
        const nameRate = {
            regNo, rate, status, company, executive, state, branch
        }
        //console.log(request.body.regNo);return;
        const newNameRate = new NameRate(nameRate)
        await newNameRate.save()
        response.status(201).json(newNameRate)
    } catch (error) {
        next(error)
    }
}

export const nameRateGetting = async (requxest, response, next) => {
    try {
        const nameRate = await NameRate.find({})
        response.status(201).json(nameRate)
    }
    catch (error) {
        next(error)
    }
}   