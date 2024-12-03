package ait.car;

import ait.car.dto.CarDTO;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.File;
import java.io.IOException;

/**
 * @author Sergey Bugaenko
 * {@code @date} 03.12.2024
 */

public class CarRestoreApp {

    private static ObjectMapper mapper = new ObjectMapper();

    public static void main(String[] args) throws IOException {

        CarDTO carDTO = mapper.readValue(new File("vw.json"), CarDTO.class);

        System.out.println(carDTO);




    }
}
