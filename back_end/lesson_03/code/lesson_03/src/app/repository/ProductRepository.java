package app.repository;

import app.model.Product;

/**
 * @author Sergey Bugaenko
 * {@code @date} 02.12.2024
 */

public interface ProductRepository {
    Product getById(long id);
}
