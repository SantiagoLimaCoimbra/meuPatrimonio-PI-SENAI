package patrimoniumsenai.apipatrimonium.admin;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("admins")
public class AdminController {

    @Autowired
    private AdminRepository repository;

    @PostMapping
    @Transactional
    public void create(@RequestBody @Valid CreateAdminDTO data){
        repository.save(new Admin(data));
    }

}
