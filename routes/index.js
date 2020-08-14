const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientControllers');

module.exports = function () {
    // Agrega nuevos pacientes via POST
    router.post('/patients',
        patientController.newClient
    );

    // Obtiene todos los registros de pacientes en la BD
    router.get('/patients',
        patientController.getPatients
    );
    // Obtiene un paciente en especifico (ID)
    router.get('/patients/:id',
        patientController.getPatient
    )

    // Actualizar un registro con un ID especifico
    router.put('/patients/:id',
        patientController.updatePaciente
    );

    // Elimina un paciente por su ID
    router.delete('/patients/:id',
        patientController.deletePatient
    );


    return router;
}