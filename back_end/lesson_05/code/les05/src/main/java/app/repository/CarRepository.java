package app.repository;

import app.model.Car;

import java.util.List;

/**
 * @author Sergey Bugaenko
 * {@code @date} 03.12.2024
 */

public interface CarRepository {
    // Получение всех машин
    List<Car> getAll();

    // Сохранение машины в Хранилище Данных
    Car save(Car car);

    Car findById(long id);
}
