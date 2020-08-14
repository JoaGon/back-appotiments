const Patient = require('../models/Patient');

// Cuando se crea un nuevo cliente
exports.newClient = async (req, res, next) => {

    // crear objeto de paciente con datos de req.body
    const patient = new Patient(req.body);

    try {
        await patient.save();
        res.json({ mensaje: 'El cliente se agregó correctamente' });
    } catch (error) {
        console.log(error);
        next();
    }
}

/** Obtiene todos los pacientes */

exports.getPatients = async (req, res, next) => {
    try {
        console.log('llega');
        const patients = await Patient.find({});
        console.log('patientes');
        res.json(patients);
    } catch (error) {
        console.log(error);
        next();
    }
}

/** Obtiene un paciente en especifico por su ID */
exports.getPatient = async (req, res, next) => {
    try {
        const patient = await Patient.findById(req.params.id);
        res.json(patient);
    } catch (error) {
        console.log(error);
        next();
    }
}

// Actualiza un registro por su ID
exports.updatePaciente = async (req, res, next) => {
    try {
        const patient = await Patient.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true
        });
        res.json(patient);
    } catch (error) {
        console.log(error);
        next();
    }
}

// Elimina un paciente por su id
exports.deletePatient = async (req, res, next) => {
    try {
        await Patient.findOneAndDelete({ _id: req.params.id });
        res.json({ mensaje: 'El paciente fue eliminado' })
    } catch (error) {
        console.log(error);
        next();
    }
}