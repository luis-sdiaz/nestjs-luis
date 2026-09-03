import { Controller, Get, Param } from '@nestjs/common';
import { get } from 'http';

interface User{
    id:string;
    name: string;
    email: string;
}
@Controller('users')
export class UsersController {

private users: User[] = [
  { id: '1', name: 'Luis', email: 'sebaslsdy123@gmail.com' },
  { id: '2', name: 'Ana', email: 'ana.martinez@gmail.com' },
  { id: '3', name: 'Carlos', email: 'carlos.gomez@outlook.com' },
  { id: '4', name: 'Sofia', email: 'sofia.rodriguez@hotmail.com' },
  { id: '5', name: 'Mateo', email: 'mateo.fernandez@gmail.com' },
  { id: '6', name: 'Valentina', email: 'valen.lopez@yahoo.com' },
  { id: '7', name: 'Diego', email: 'diego.torres@gmail.com' },
  { id: '8', name: 'Camila', email: 'camila.vargas@outlook.com' },
  { id: '9', name: 'Javier', email: 'javi.morales@gmail.com' },
  { id: '10', name: 'Isabella', email: 'isa.mendoza@gmail.com' }
];

    @Get('')
    getAllUsers() {
        return this.users;
    }
    @Get(':id')
    getUserByid(@Param('id') id: string){
        console.log('.:: User ID: ', id)
        const user = this.users.find((user) => user.id == id);
        console.log('.:: usuario buscado: ', user)
        return user;

    }
    @Get('search/:name')
    getUserEmailByName(@Param('name') name: string) {
        const data = this.users.find((user) => user.name === name);
        if (data) {
            return {result: data?.email};
        } else {
            return {result: 'User no encontrado'};
        }
    }

}
