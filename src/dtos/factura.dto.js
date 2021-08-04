const mongoose = require('mongoose');

const { FacturaSchema } = require('./../models/factura.model');

// Metodo que registra en base de datos una orden de compra 
FacturaSchema.statics.darAltaFactura = function(datas){

    const obj = {
        dta: null,
        err: false
    };

    try {
        
        let factura = new Factura(datos);

        obj.dta = await fatura.save();

    } catch (error) {
        
        obj.dta = null;

        obj.err = true; 
    }

    return obj; 
}

FacturaSchema.statics.consultarFacturasPorFecha = async function(fechaInicio, fechaFinal) {

    const obj = {
        dta: null,
        err: false
    };

    try {

        obj.dta = await this.aggregate([

            {
                $match: {

                    fechaFactura: {
                        $gte: fechaInicio,
                        $lte: fechaFinal
                    }
                }
            },

            {
                $lookup: {
                    from: 'clientes',
                    localField: 'cliente.idCliente',
                    foreignField: '_id',
                    as: 'cliente'
                }
            },

            {
                $unwind: {
                    path: '$cliente',
            },

            },

            {
                $lookup: {
                    from: 'productos',
                    localField: 'producto.idProducto',
                    foreignField: '_id',
                    as: 'producto'
                }
            }, 

            {
                $unwind: {
                    path: '$producto',
                }
            },

            {
                $project: {
                    'producto.nombreProducto': 1, 
                    'producto.precioVenta': 1, 
                    'cliente.nombre': 1, 
                    'cliente.apellido': 1, 
                    totalVenta: 1, 
                    FechaFactura, 1
                }
            }
        ])
    } catch (error) {

        obj.dta = null;

        obj.err = true;
    }

    return obj;
}

const Factura = mongoose.model('Factura', FacturaSchema);

module.exports = { Factura };