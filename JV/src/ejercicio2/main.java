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
		
			conexion.setAutoCommit(false);
			
			System.out.println("Versión: " + conexion.getMetaData().getDatabaseProductVersion());
			// muestra información del diver MySQL (MySQL Connector/J)
			System.out.println("Driver: " + conexion.getMetaData().getDriverName());
			// muestra información de la versión del driver MySQL (mysql-connector-java-8.0.18)
			System.out.println("Versión del driver: " + conexion.getMetaData().getDriverVersion());
			
			instruccion = conexion.createStatement();
			PreparedStatement query = conexion.prepareStatement ("Select cursos.asignatura  as asignatura, usuarios.nombre as nombre,notas.nota as nota,asignaturas.profesor as profesor from  asignaturas,cursos,notas,usuarios where notas.id_alumno = usuarios.id AND notas.id_asignatura = cursos.id_asignatura AND notas.id_curso = asignaturas.id_profesor;"); 
			
			PreparedStatement ps1 = conexion.prepareStatement ("INSERT INTO usuarios (dni,nombre, apellidos, usuario, contraseña, dirección, telefono ) VALUES (?,?,?,?,?,?,?)");
			ps1.setString(1, "9158972E");
			ps1.setString(2, "Lukas");
			ps1.setString(3, "Martinez Albert");
			ps1.setString(4, "lma");
			ps1.setString(5, "1234");
			ps1.setString(6, "C. Peru");
			ps1.setString(7, "68986226");
			
			PreparedStatement ps2 = conexion.prepareStatement ("INSERT INTO cursos (asignatura) VALUES (?)");
			ps2.setString(1, "Montaje y Mantenimiento");
			
			PreparedStatement ps3 = conexion.prepareStatement ("INSERT INTO asignaturas (profesor) VALUES (?)");
			ps3.setString(1, "Israel");
			
			PreparedStatement ps4 = conexion.prepareStatement ("INSERT INTO notas (id_alumno,id_asignatura,id_curso,nota) VALUES (?,?,?,?)");
			ps4.setString(1, "1");
			ps4.setString(2, "7");
			ps4.setString(3, "7");
			ps4.setString(4, "7");
			
			PreparedStatement ps5 = conexion.prepareStatement ("INSERT INTO notas (id_alumno,id_asignatura,id_curso,nota) VALUES (?,?,?,?)");
			ps5.setString(1, "2");
			ps5.setString(2, "7");
			ps5.setString(3, "7");
			ps5.setString(4, "5");
			
			PreparedStatement ps6 = conexion.prepareStatement ("INSERT INTO notas (id_alumno,id_asignatura,id_curso,nota) VALUES (?,?,?,?)");
			ps6.setString(1, "3");
			ps6.setString(2, "7");
			ps6.setString(3, "7");
			ps6.setString(4, "8");
			
			PreparedStatement ps7 = conexion.prepareStatement ("INSERT INTO notas (id_alumno,id_asignatura,id_curso,nota) VALUES (?,?,?,?)");
			ps7.setString(1, "4");
			ps7.setString(2, "7");
			ps7.setString(3, "7");
			ps7.setString(4, "9");
			
			PreparedStatement ps8 = conexion.prepareStatement ("INSERT INTO notas (id_alumno,id_asignatura,id_curso,nota) VALUES (?,?,?,?)");
			ps8.setString(1, "4");
			ps8.setString(2, "1");
			ps8.setString(3, "1");
			ps8.setString(4, "6");
			
			PreparedStatement ps9 = conexion.prepareStatement ("INSERT INTO notas (id_alumno,id_asignatura,id_curso,nota) VALUES (?,?,?,?)");
			ps9.setString(1, "4");
			ps9.setString(2, "2");
			ps9.setString(3, "2");
			ps9.setString(4, "5");
			
			PreparedStatement ps10 = conexion.prepareStatement ("INSERT INTO notas (id_alumno,id_asignatura,id_curso,nota) VALUES (?,?,?,?)");
			ps10.setString(1, "4");
			ps10.setString(2, "3");
			ps10.setString(3, "3");
			ps10.setString(4, "7");
			
			PreparedStatement ps11 = conexion.prepareStatement ("INSERT INTO notas (id_alumno,id_asignatura,id_curso,nota) VALUES (?,?,?,?)");
			ps11.setString(1, "4");
			ps11.setString(2, "4");
			ps11.setString(3, "4");
			ps11.setString(4, "7");
			
			PreparedStatement ps12 = conexion.prepareStatement ("INSERT INTO notas (id_alumno,id_asignatura,id_curso,nota) VALUES (?,?,?,?)");
			ps12.setString(1, "4");
			ps12.setString(2, "5");
			ps12.setString(3, "5");
			ps12.setString(4, "5");
			
			PreparedStatement ps13 = conexion.prepareStatement ("INSERT INTO notas (id_alumno,id_asignatura,id_curso,nota) VALUES (?,?,?,?)");
			ps13.setString(1, "4");
			ps13.setString(2, "6");
			ps13.setString(3, "6");
			ps13.setString(4, "6");
			
			ps1.execute();
			ps2.execute();
			ps3.execute();
			ps4.execute();
			ps5.execute();
			ps6.execute();
			ps7.execute();
			ps8.execute();
			ps9.execute();
			ps10.execute();
			ps11.execute();
			ps12.execute();
			ps13.execute();
			boolean funciona = query.execute();
			
			if(funciona) {
				ResultSet loteResultados = query. getResultSet();
				while (loteResultados.next()) {
					System.out.printf("\n%s \n%s \n%s\n%s\n", loteResultados.getString("asignatura"),loteResultados.getString("nombre"),loteResultados.getString("nota"),loteResultados.getString("profesor"));
				}
			}
			else
				System.out.println("La consulta no ha devuelto resultados");
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
