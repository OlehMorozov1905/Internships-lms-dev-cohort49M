package app.repository;

import app.constants.Constants;
import app.model.Car;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;
import java.util.List;

import static app.constants.Constants.*;


/**
 * @author Sergey Bugaenko
 * {@code @date} 05.12.2024
 */

public class CarRepositoryDB implements CarRepository {


    private Connection getConnection() {

        try {
            // Подгрузили класс драйвера в память приложения
            Class.forName(DB_DRIVER_PATH);

            // jdbc:postgres://localhost:5432/g_49_cars?user=my_user&password=pos1234
            String dbUrl = String.format("%s%s?user=%s&password=%s",
                    DB_ADDRESS, DB_NAME, DB_USER, DB_PASSWORD);

           return DriverManager.getConnection(dbUrl);


        } catch (Exception e ) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public List<Car> getAll() {
        try (Connection connection = getConnection()) {


        } catch (Exception e){
            throw new RuntimeException(e);
        }
        return List.of();
    }

    @Override
    public Car getById(long id) {
        try (Connection connection = getConnection()) {


        } catch (Exception e){
            throw new RuntimeException(e);
        }
        return null;
    }

    @Override
    public Car save(Car car) {
       try (Connection connection = getConnection()) {
           /*
           1. Составить sql-запрос
            */

           // INSERT INTO cars (brand, price, year) VALUES ('Toyota', 35000, 2022);
           String query = String.format("INSERT INTO cars (brand, price, year) VALUES ('%s', %s, %d);",
                   car.getBrand(), car.getPrice(), car.getYear());

           Statement statement = connection.createStatement();

           statement.execute(query);

           return car;

       } catch (Exception e){
           throw new RuntimeException(e);
       }

    }

    @Override
    public Car update(Car car) {
        try (Connection connection = getConnection()) {


        } catch (Exception e){
            throw new RuntimeException(e);
        }
        return null;
    }

    @Override
    public void deleteById(long id) {
        try (Connection connection = getConnection()) {


        } catch (Exception e){
            throw new RuntimeException(e);
        }

    }
}
