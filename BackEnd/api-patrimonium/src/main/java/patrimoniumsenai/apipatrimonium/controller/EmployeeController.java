package patrimoniumsenai.apipatrimonium.controller;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import patrimoniumsenai.apipatrimonium.employee.*;

import java.util.List;

@RestController
@RequestMapping("employees")
public class EmployeeController {

    @Autowired
    private EmployeeRepository repository;

    @PostMapping
    @Transactional
    public void create(@RequestBody @Valid CreateEmployeeDTO data){
        repository.save(new Employee(data));
    }

    @GetMapping
    public List<ReadEmployeeDTO> read(){
        return repository.findAll().stream().map(ReadEmployeeDTO::new).toList();
    }

    @GetMapping("/{id_employee}")
    public ResponseEntity<?> readId(@PathVariable Long id_employee){
        Employee employee = repository.findById(id_employee).get();
        return ResponseEntity.ok(employee);
    }

    @PutMapping
    @Transactional
    public void update(@RequestBody @Valid UpdateEmployeeDTO data){
        var employee = repository.getReferenceById(data.id_employee());
        employee.updateInfo(data);
    }

    @DeleteMapping("/{id_employee}")
    @Transactional
    public void delet(@PathVariable Long id_employee){
        repository.deleteById(id_employee);
    }

}
