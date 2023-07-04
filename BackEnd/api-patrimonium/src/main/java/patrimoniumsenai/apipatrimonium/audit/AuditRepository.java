package patrimoniumsenai.apipatrimonium.audit;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface AuditRepository extends JpaRepository<Audit, Long> {
    @Query("SELECT a FROM Audit a ORDER BY id_audit DESC")
    List<Audit> findAllOrderByDesc();
}
