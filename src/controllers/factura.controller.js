const {  Factura } = require('./../dtos/factura.dto');

const { Producto } = require('./../dtos/producto.dto');

const { utils } = require('./../utils/util');

const { ObjectID } = require('mongodb');

const darAltaNuevaFactura = async (req, res) => {


  let facturaData = {
      numFactura: req.body.numeroFactura
      fchFactura: req.body.fechaFactura,
      clienteIdent: req.body.clienteIdent, 
      cantidadVendida: req.body.cantidadVendida, 
      totalVenta: req.body.totalVenta, 
      idCliente: req.body.idCliente,
      idProducto: req.body.idProducto
  };
    
  try {
    
    let factura = await Factura.darAltaNuevaFactura(facturaData);

    if(utils.isNullOrUndefined(factura)){
      res.send({ status: 401, message: 'Error al dar de alta una factura.' });
    }

    let resultActualizacionStockProducto = await Producto.actualizarCantidadInventarioPoridProducto(req.body.idProducto, req.body.cantidadInventario); 

    if(utils.isNullOrUndefined(resultActualizacionStockProducto)){
      res.send({ status: 401, message: 'Error al actualiar Cantidad de inventario en productos.' });
    }

    res.send({
      data: factura,
      status: 200
    });

  } catch (error) {
    res.json({ error: true, message: err.message ? err.message : err });
  }

}

const consultarFacturasPorFecha = (req, res) => {

  try {
    
  } catch (error) {
    
  }

}

module.exports = {
  darAltaCliente, 
  consultarFacturasPorFecha
};

