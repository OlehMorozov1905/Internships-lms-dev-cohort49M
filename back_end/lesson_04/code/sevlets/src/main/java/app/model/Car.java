package app.model;

import java.math.BigDecimal;
import java.util.Objects;

/**
 * @author Sergey Bugaenko
 * {@code @date} 03.12.2024
 */

public class Car {
    private Long id; // null
    private String brand;
    private BigDecimal price;
    private int year;

    public Car(String brand, BigDecimal price, int year) {
        this.brand = brand;
        this.price = price;
        this.year = year;
    }

    @Override
    public String toString() {
        return String.format("Car: id - %d, brand - %s, price - %s", id, brand, price);
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Override
    public final boolean equals(Object o) {
        if (!(o instanceof Car car)) return false;

        return year == car.year && Objects.equals(id, car.id) && Objects.equals(brand, car.brand) && Objects.equals(price, car.price);
    }

    @Override
    public int hashCode() {
        int result = Objects.hashCode(id);
        result = 31 * result + Objects.hashCode(brand);
        result = 31 * result + Objects.hashCode(price);
        result = 31 * result + year;
        return result;
    }
}
