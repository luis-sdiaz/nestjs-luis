import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

interface Producto {
  id: string;
  name: string;
  price: number;
  description: string;
  stock: number;
  vencido: boolean;
  categoria: string;
}

@Controller('productos')
export class ProductosController {
  private productos: Producto[] = [
    {
      id: '1',
      name: 'Leche',
      price: 3500,
      description: 'Leche entera 1L',
      stock: 10,
      vencido: false,
      categoria: 'Lácteos',
    },
    {
      id: '2',
      name: 'Yogurt',
      price: 2000,
      description: 'Yogurt de fresa',
      stock: 0,
      vencido: true,
      categoria: 'Lácteos',
    },
    {
      id: '3',
      name: 'Pan',
      price: 1500,
      description: 'Pan tajado',
      stock: 5,
      vencido: false,
      categoria: 'Panadería',
    },
    {
      id: '4',
      name: 'Queso',
      price: 4000,
      description: 'Queso campesino',
      stock: 0,
      vencido: false,
      categoria: 'Lácteos',
    },
    {
      id: '5',
      name: 'Jamon',
      price: 5000,
      description: 'Jamón de pavo',
      stock: 8,
      vencido: true,
      categoria: 'Embutidos',
    },
  ];

  // A. Listar Productos
  @Get()
  getAll() {
    return this.productos;
  }

  // C. Listar Productos sin Stock (Ruta específica antes de :id para evitar conflictos)
  @Get('sin-stock')
  getSinStock() {
    return this.productos.filter((p) => p.stock === 0);
  }

  // D. Listar Productos Vencidos
  @Get('vencidos')
  getVencidos() {
    return this.productos.filter((p) => p.vencido === true);
  }

  // E. Listar Productos por Categoría
  @Get('categoria/:categoria')
  getByCategoria(@Param('categoria') categoria: string) {
    return this.productos.filter(
      (p) => p.categoria.toLowerCase() === categoria.toLowerCase(),
    );
  }

  // B. Listar Producto por ID
  @Get(':id')
  getById(@Param('id') id: string) {
    return this.productos.find((p) => p.id === id);
  }
  // Crear un Producto nuevo (POST)
  @Post()
  createProducto(@Body() nuevoProducto: Producto) {
    this.productos.push(nuevoProducto);
    console.log(
      'Se ejecutó el método POST: Creando producto',
      nuevoProducto.name,
    );
    return {
      msg: 'Producto creado con éxito',
      data: nuevoProducto,
    };
  }
  // G. Actualizar un Producto (PUT)
  @Put(':id')
  updateProducto(@Param('id') id: string, @Body() cambiosProducto: any) {
    const index = this.productos.findIndex((p) => p.id === id);
    const productoActual = this.productos[index];

    this.productos[index] = {
      ...productoActual,
      ...cambiosProducto,
    };
    console.log(`Se ejecutó el método PUT: Actualizando producto con ID ${id}`);

    return {
      msg: 'Producto actualizado con éxito',
      data: this.productos[index],
    };
  }
  // H. Eliminar un Producto (DELETE)
  @Delete(':id')
  deleteProducto(@Param('id') id: string) {
    const index = this.productos.findIndex((p) => p.id === id);
    this.productos.splice(index, 1);
    console.log(
      `Se ejecutó el método DELETE: Eliminando producto con ID ${id}`,
    );

    return {
      msg: 'Producto eliminado con éxito',
    };
  }
}
