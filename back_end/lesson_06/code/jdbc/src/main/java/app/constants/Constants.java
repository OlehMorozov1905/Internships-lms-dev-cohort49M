package app.constants;

/**
 * @author Sergey Bugaenko
 * {@code @date} 05.12.2024
 */

public interface Constants {
    String DB_DRIVER_PATH = "org.postgresql.Driver";

    // http://localhost:8080/cars?id=7
    // jdbc:postgres://10.2.3.4:5432/g_49_cars?user=my_user&password=pos1234

    String DB_ADDRESS = "jdbc:postgresql://localhost:5432/";
    String DB_NAME = "g_49_cars";
    String DB_USER = "my_user";
    String DB_PASSWORD = "pos1234";


}
