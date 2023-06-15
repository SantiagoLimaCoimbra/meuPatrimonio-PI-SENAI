package patrimoniumsenai.apipatrimonium.controller;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import patrimoniumsenai.apipatrimonium.admin.Admin;
import patrimoniumsenai.apipatrimonium.admin.AdminRepository;
import patrimoniumsenai.apipatrimonium.admin.CreateAdminDTO;
import patrimoniumsenai.apipatrimonium.admin.ReadAdminDTO;
import patrimoniumsenai.apipatrimonium.category.ReadCategoryDTO;

import java.util.List;

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

    @GetMapping
    public List<ReadAdminDTO> read(){
        return repository.findAll().stream().map(ReadAdminDTO::new).toList();
    }

}
