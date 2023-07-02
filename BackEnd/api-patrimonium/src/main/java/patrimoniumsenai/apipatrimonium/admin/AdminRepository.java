package patrimoniumsenai.apipatrimonium.admin;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;

public interface AdminRepository extends JpaRepository<Admin, Long> {
    //Page<Admin> findAllByActiveTrue(Pageable pagination);
    UserDetails findByCpf(String cpf);
}
