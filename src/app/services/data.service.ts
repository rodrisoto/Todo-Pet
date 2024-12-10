import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public dbInstance!: SQLiteObject;

  constructor(private sqlite: SQLite) {
    this.initializeDatabase();
  }

  async initializeDatabase() {
    try {
      this.dbInstance = await this.sqlite.create({
        name: 'todo_pet.db',
        location: 'default',
      });
      await this.createTables();
    } catch (error) {
      console.error('Error al inicializar la base de datos:', error);
    }
  }

  async createTables() {
    try {
      await this.dbInstance.executeSql(
        `CREATE TABLE IF NOT EXISTS users(
          id INTEGER PRIMARY KEY,
          nombre TEXT,
          apellido TEXT,
          email TEXT UNIQUE,
          password TEXT,
          nivel_educacion TEXT,
          fecha_nacimiento TEXT
        )`,
        []
      );
    } catch (error) {
      console.error('Error al crear tablas:', error);
    }
  }

  async registerUser(nombre: string, apellido: string, email: string, password: string, nivelEducacion: string, fechaNacimiento: string): Promise<boolean> {
    try {
      await this.dbInstance.executeSql(
        `INSERT INTO users (nombre, apellido, email, password, nivel_educacion, fecha_nacimiento)
         VALUES (?, ?, ?, ?, ?, ?)`,
        [nombre, apellido, email, password, nivelEducacion, fechaNacimiento]
      );
      return true;
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      return false;
    }
  }

  async loginUser(email: string, password: string): Promise<any> {
    try {
      const result = await this.dbInstance.executeSql(
        'SELECT * FROM users WHERE email = ? AND password = ?',
        [email, password]
      );
      if (result.rows.length > 0) {
        return result.rows.item(0); // Devuelve el usuario
      }
      return null; // Usuario no encontrado
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      return null;
    }
  }

  async closeConnection() {
    try {
      if (this.dbInstance) {
        await this.dbInstance.close();
        console.log('Conexión cerrada.');
      }
    } catch (error) {
      console.error('Error al cerrar la conexión:', error);
    }
  }
}
