package app.repository;

import app.model.Car;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author Sergey Bugaenko
 * {@code @date} 03.12.2024
 */

public class CarRepositoryMap implements CarRepository {
    private Map<Long, Car> database = new HashMap<>();
    private long currentId;

    public CarRepositoryMap() {
        initData();
    }

    private void initData() {
        save(new Car("VW", new BigDecimal(15000), 2015));
        save(new Car("Mazda", new BigDecimal(30000), 2023));
        save(new Car("Ford", new BigDecimal(40000), 2024));
    }

    @Override
    public List<Car> getAll() {
        return new ArrayList<>(database.values());
//        return database.values().stream().toList();
    }

    @Override
    public Car save(Car car) {
        car.setId(++currentId);
        database.put(car.getId(), car);
        return car;
    }

    @Override
    public Car update(Car car) {
        // TODO домашнее задание
        return null;
    }

    @Override
    public void deleteById(long id) {
        // TODO домашнее задание
    }

    @Override
    public Car getById(long id) {
        return database.getOrDefault(id, null);
    }
}
