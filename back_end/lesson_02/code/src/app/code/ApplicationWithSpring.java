package app.code;

import app.staff.administration.Director;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.support.AbstractApplicationContext;

/**
 * @author Sergey Bugaenko
 * {@code @date} 29.11.2024
 */

public class ApplicationWithSpring {

    public static void main(String[] args) {

        // Получить объект контекста.

        AbstractApplicationContext context =
                new AnnotationConfigApplicationContext("app.config");

        // Из контекста получаем Bean директора
        Director director = context.getBean(Director.class);

        director.manageCompany();

    }
}
