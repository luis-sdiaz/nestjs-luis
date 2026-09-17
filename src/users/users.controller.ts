import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Put,
} from '@nestjs/common';

interface User {
  id: string;
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
    { id: '10', name: 'Isabella', email: 'isa.mendoza@gmail.com' },
  ];
  @Get('')
  getAllUsers() {
    return this.users;
  }
  @Get(':id')
  getUserByid(@Param('id') id: string) {
    console.log('.:: User ID: ', id);
    const user = this.users.find((user) => user.id === id);
    console.log('.:: usuario buscado: ', user);

    if (user) {
      return {
        msg: 'Usuario encontrado',
        data: user,
      };
    }
    return {
      msg: 'Usuario no encontrado',
    };
  }
  @Get('search/:name')
  getUserEmailByName(@Param('name') name: string) {
    const data = this.users.find((user) => user.name === name);
    if (data) {
      return { result: data?.email };
    } else {
      return { result: 'User no encontrado' };
    }
  }
  @Post()
  createUser(@Body() userPayload: User) {
    console.log('.:: user: ', userPayload);

    const data = this.users.find(
      (user) => user.id === userPayload.id || user.email === userPayload.email,
    );

    if (data) {
      return {
        msg: 'El usuario ya se encuentra registrado',
      };
    }
    this.users.push(userPayload);
    return {
      msg: 'Usuario creado con éxito',
      data: userPayload,
    };
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    console.log('.:: UserID: ', id);
    const position = this.users.findIndex((user) => user.id === id);
    console.log('.:: position: ', position);
    if (position === -1) {
      return {
        msg: 'No existe el ID',
      };
    }
    this.users.splice(position, 1);

    return {
      msg: 'Usuario eliminado con exito',
    };
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() userChanges: User) {
    console.log(':: userID Update: ', id);
    console.log(':: userChanges: ', userChanges);

    const position = this.users.findIndex((user) => user.id === id);
    if (position === -1) {
      return {
        msg: 'No existe el ID',
      };
    }

    const existingUser = this.users[position];
    console.log(':: existingUser: ', existingUser);

    const updatedUser = { ...existingUser, ...userChanges };
    this.users[position] = updatedUser;

    return {
      msg: 'Usuario actualizado con éxito',
      data: updatedUser,
    };
  }
}
