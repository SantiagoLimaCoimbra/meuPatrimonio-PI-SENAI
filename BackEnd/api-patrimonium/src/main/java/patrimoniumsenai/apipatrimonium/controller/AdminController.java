package patrimoniumsenai.apipatrimonium.controller;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import patrimoniumsenai.apipatrimonium.admin.Admin;
import patrimoniumsenai.apipatrimonium.admin.AdminRepository;
import patrimoniumsenai.apipatrimonium.admin.CreateAdminDTO;
import patrimoniumsenai.apipatrimonium.admin.ReadAdminDTO;

import java.util.List;

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

    //Excluir este metodo no quando for para producao
//    @GetMapping
//    public List<ReadAdminDTO> read(){
//        return repository.findAll().stream().map(ReadAdminDTO::new).toList();
//    }
//
//    //Excluir este metodo no quando for para producao
//    @GetMapping("/{id}")
//    public ResponseEntity<?> readId(@PathVariable Long id){
//        Admin admin = repository.findById(id).get();
//        return ResponseEntity.ok(admin);
//    }

}
