package patrimoniumsenai.apipatrimonium.admin;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepository  extends JpaRepository<Admin, Long> {
    //Page<Admin> findAllByActiveTrue(Pageable pagination);
}
