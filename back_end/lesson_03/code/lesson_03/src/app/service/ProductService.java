package app.service;

import app.model.Product;

/**
 * @author Sergey Bugaenko
 * {@code @date} 02.12.2024
 */

public interface ProductService {
    Product getById(long id);
}
