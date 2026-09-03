import { Controller, Get, Param } from '@nestjs/common';

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
    { id: '1', name: 'Leche', price: 3.50, description: 'Leche entera 1L', stock: 10, vencido: false, categoria: 'Lácteos' },
    { id: '2', name: 'Yogurt', price: 2.00, description: 'Yogurt de fresa', stock: 0, vencido: true, categoria: 'Lácteos' },
    { id: '3', name: 'Pan', price: 1.50, description: 'Pan tajado', stock: 5, vencido: false, categoria: 'Panadería' },
    { id: '4', name: 'Queso', price: 4.00, description: 'Queso campesino', stock: 0, vencido: false, categoria: 'Lácteos' },
    { id: '5', name: 'Jamon', price: 5.00, description: 'Jamón de pavo', stock: 8, vencido: true, categoria: 'Embutidos' }
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
      (p) => p.categoria.toLowerCase() === categoria.toLowerCase()
    );
  }

  // B. Listar Producto por ID
  @Get(':id')
  getById(@Param('id') id: string) {
    return this.productos.find((p) => p.id === id);
  }
}