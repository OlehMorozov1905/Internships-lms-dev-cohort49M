package app.code;

import app.staff.administration.Director;
import app.staff.administration.ProductionChef;
import app.staff.administration.SalesChef;
import app.staff.specialists.Secretary;
import app.staff.specialists.production.MachineOperator;
import app.staff.specialists.production.StoreKeeper;
import app.staff.specialists.sales.Merchandiser;
import app.staff.specialists.sales.SalesManager;

/**
 * @author Sergey Bugaenko
 * {@code @date} 29.11.2024
 */

public class Application {
    public static void main(String[] args) {
        MachineOperator machineOperator = new MachineOperator();
        StoreKeeper storeKeeper = new StoreKeeper();

        Merchandiser merchandiser = new Merchandiser();
        SalesManager salesManager = new SalesManager();

        Secretary secretary = new Secretary();

        ProductionChef productionChef = new ProductionChef();
        productionChef.setMachineOperator(machineOperator);
        productionChef.setStoreKeeper(storeKeeper);

        SalesChef salesChef = new SalesChef();
        salesChef.setMerchandiser(merchandiser);
        salesChef.setSalesManager(salesManager);

        Director director = new Director();
        director.setSecretary(secretary);
        director.setProductionChef(productionChef);
        director.setSalesChef(salesChef);

        director.manageCompany();

    }
}
