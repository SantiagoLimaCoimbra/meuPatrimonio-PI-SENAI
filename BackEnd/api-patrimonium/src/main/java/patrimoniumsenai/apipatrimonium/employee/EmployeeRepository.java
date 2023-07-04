package patrimoniumsenai.apipatrimonium.employee;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    @Query("SELECT e FROM Employee e ORDER BY id_employee DESC")
    List<Employee> findAllOrderByDesc();
}
