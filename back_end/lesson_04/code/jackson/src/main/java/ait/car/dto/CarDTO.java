package ait.car.dto;

import java.util.List;

/**
 * @author Sergey Bugaenko
 * {@code @date} 03.12.2024
 */

/*
Для Jackson:
1. В DTO обязательно должны быть геттеры
2. Должен быть дефолтный (без параметров) конструктор
 */

public class CarDTO {
    private String brand;
    private int year;
    private List<String> models;

    public CarDTO(String brand, int year, List<String> models) {
        this.brand = brand;
        this.year = year;
        this.models = models;
    }

    public CarDTO() {
    }

    @Override
    public String toString() {
        return "CarDTO{" +
                "brand='" + brand + '\'' +
                ", year=" + year +
                ", models=" + models +
                '}';
    }

    public String getBrand() {
        return brand;
    }

    public int getYear() {
        return year;
    }

    public List<String> getModels() {
        return models;
    }
}
