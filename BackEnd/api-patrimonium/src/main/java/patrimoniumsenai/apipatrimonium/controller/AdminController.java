package patrimoniumsenai.apipatrimonium.controller;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import patrimoniumsenai.apipatrimonium.admin.Admin;
import patrimoniumsenai.apipatrimonium.admin.AdminRepository;
import patrimoniumsenai.apipatrimonium.admin.CreateAdminDTO;

@RestController
@RequestMapping("/admins")
public class AdminController {

    @Autowired
    private AdminRepository repository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping
    @Transactional
    public void create(@RequestBody @Valid CreateAdminDTO data){

        repository.save(new Admin(data, passwordEncoder));
    }
}
