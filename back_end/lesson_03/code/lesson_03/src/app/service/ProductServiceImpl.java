package app.service;

import app.model.Product;
import app.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Service;

/**
 * @author Sergey Bugaenko
 * {@code @date} 02.12.2024
 */

@Service
// Указываем файл с настройками
@PropertySource("classpath:application.properties")
public class ProductServiceImpl implements ProductService{

    /*
    Есть три способа внедрения зависимостей
    1. @Autowired
    2. Внедрение через конструктор
    3. Внедрение через сеттер
     */

    private ProductRepository repository;
    private String articlePrefix;

    public ProductServiceImpl(ProductRepository repository, @Value("${article.prefix}") String articlePrefix) {
        this.repository = repository;
        this.articlePrefix = articlePrefix;
    }

    @Override
    public Product getById(long id) {
        Product product = repository.getById(id);
        setArticle(product);
        return product;
    }

    private void setArticle(Product product) {
        // Apple, id=1 -> Art-A-2
        String article = String.format("%s-%s-%d", articlePrefix, product.getTitle().charAt(0), product.getId());
        product.setArticle(article);
    }
}
