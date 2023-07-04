package patrimoniumsenai.apipatrimonium.category;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CategoryRepository extends JpaRepository<Category, Long> {
    @Query("SELECT c FROM Category c ORDER BY id_category DESC")
    List<Category> findAllOrderByDesc();
}
