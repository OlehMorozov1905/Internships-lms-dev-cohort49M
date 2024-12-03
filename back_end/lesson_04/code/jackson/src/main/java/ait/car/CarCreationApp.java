package ait.car;

import ait.car.dto.CarDTO;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.File;
import java.io.IOException;
import java.util.List;

/**
 * @author Sergey Bugaenko
 * {@code @date} 03.12.2024
 */

public class CarCreationApp {

    // Объект, который занимается преобразование JSON -> Java -> JSON
    private static ObjectMapper objectMapper = new ObjectMapper();

    public static void main(String[] args) throws IOException {


        List<String> models = List.of("Polo", "Golf", "Tiguan");
        CarDTO carDTO = new CarDTO("VW", 2020, models);

        objectMapper.writeValue(new File("vw.json"), carDTO);



    }
}
