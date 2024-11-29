package app.staff.administration;

import app.staff.specialists.sales.Merchandiser;
import app.staff.specialists.sales.SalesManager;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * @author Sergey Bugaenko
 * {@code @date} 29.11.2024
 */

public class SalesChef {
    @Autowired
    private Merchandiser merchandiser;
    @Autowired
    private SalesManager salesManager;

    public void giveOrders() {
        merchandiser.work();
        salesManager.work();
    }



    public Merchandiser getMerchandiser() {
        return merchandiser;
    }

    public void setMerchandiser(Merchandiser merchandiser) {
        this.merchandiser = merchandiser;
    }

    public SalesManager getSalesManager() {
        return salesManager;
    }

    public void setSalesManager(SalesManager salesManager) {
        this.salesManager = salesManager;
    }
}
