package ejercicio2;

import com.mysql.jdbc.Driver;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.ResultSet;
import java.sql.Statement;

public class main {

	public static void main(String[] args) {
		Statement instruccion = null;
		ResultSet resultados = null;
		Connection conexion = null;
		
		try {
			/*
			subprotocolo: mysql
			host: localhost
			puerto: 3306
			base de datos: world
			usuario: workbench
			contraseña: ninguna
			*/
			conexion = DriverManager.getConnection("jdbc:mysql://localhost:3306/practica2", "escritorio", "ninguna");
			// muestra información del tipo de sistema de base de datos (MySQL)
			System.out.println("Base de datos: " +
			conexion.getMetaData().getDatabaseProductName());
		
			System.out.println("Versión: " + conexion.getMetaData().getDatabaseProductVersion());
			// muestra información del diver MySQL (MySQL Connector/J)
			System.out.println("Driver: " + conexion.getMetaData().getDriverName());
			// muestra información de la versión del driver MySQL (mysql-connector-java-8.0.18)
			System.out.println("Versión del driver: " + conexion.getMetaData().getDriverVersion());
			
			instruccion = conexion.createStatement();
			PreparedStatement query = conexion.prepareStatement ("Select cursos.asignatura  as asignatura, usuarios.nombre as nombre,notas.nota as nota,asignaturas.profesor as profesor from  asignaturas,cursos,notas,usuarios where notas.id_alumno = usuarios.id AND notas.id_asignatura = cursos.id_asignatura AND notas.id_curso = asignaturas.id_profesor;"); 
			boolean funciona = query.execute();
			
			if(funciona) {
				ResultSet loteResultados = query. getResultSet();
				while (loteResultados.next()) {
					System.out.printf("\n%s \n%s \n%s\n%s\n", loteResultados.getString("asignatura"),loteResultados.getString("nombre"),loteResultados.getString("nota"),loteResultados.getString("profesor"));
				}
			}
			}
		catch (SQLException e) {
			e.printStackTrace();
			}
		 finally {
			 //System.out.println("No Liberamos ");
			 try {
			 // libera los resultados
			 if (resultados != null) {
			 resultados.close();
			 }
			 // libera la instrucción
			 if (instruccion != null) {
			 instruccion.close();
			 }
			 // libera la conexión
			 if (conexion != null) {
			 conexion.close();
			 }
			
			 } catch (Exception e) {
				 e.printStackTrace();
				 }
				
		
	}
	}}
