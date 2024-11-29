package app.config;

import app.staff.administration.Director;
import app.staff.administration.ProductionChef;
import app.staff.administration.SalesChef;
import app.staff.specialists.Secretary;
import app.staff.specialists.production.MachineOperator;
import app.staff.specialists.production.StoreKeeper;
import app.staff.specialists.sales.Merchandiser;
import app.staff.specialists.sales.SalesManager;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * @author Sergey Bugaenko
 * {@code @date} 29.11.2024
 */

@Configuration
public class AppConfig {

    //Bean - бин - объект, который создается и находится под управлением Spring

    // Spring context - это хранилище для бинов.

    @Bean
    public Director director() {
        return new Director();
    }

    @Bean
    public ProductionChef getProductionChef() {
        return new ProductionChef();
    }

    @Bean
    public SalesChef getSalesChef() {
        return new SalesChef();
    }

    @Bean
    public MachineOperator getMachineOperator() {
        return new MachineOperator();
    }

    @Bean
    public StoreKeeper getStoreKeeper() {
        return new StoreKeeper();
    }

    @Bean
    public Merchandiser getMerchandiser() {
        return new Merchandiser();
    }

    @Bean
    public SalesManager getSalesManager() {
        return new SalesManager();
    }

    @Bean
    public Secretary getSecretary() {
        return new Secretary();
    }
}
