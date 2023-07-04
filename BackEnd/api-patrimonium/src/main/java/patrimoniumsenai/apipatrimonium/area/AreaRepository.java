package patrimoniumsenai.apipatrimonium.area;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface AreaRepository extends JpaRepository<Area, Long> {
    @Query("SELECT a FROM Area a ORDER BY id_area DESC")
    List<Area> findAllOrderByDesc();
}
